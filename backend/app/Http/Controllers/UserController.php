<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\Documento;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Services\ResponseService; 
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;

class UserController extends Controller
{
    public function index() {
        $usuarios = User::all();
        return $usuarios;
    }

    public function store(UserRequest $request) {

        $nome = $request->input('nome');
        $email = $request->input('email');
        $senha = $request->input('senha');

        $u = User::create(['nome' => $nome, 'email' => $email, 'senha' => bcrypt($senha)]);
        $u->save();

        return response(
            ['location' => ('usuarios/'. $u->id)], 201
        );
    }

    public function login(Request $request) {
        $credentials = $request->only('email', 'senha');
        try {
            $user = User::where('email', $credentials['email'])->first();
            if (!$user || !Hash::check($credentials['senha'], $user->senha)) {
                return response()->json(['message' => 'Credenciais incorretas, verifique-as e tente novamente.'], 401);
            }
        $token = JWTAuth::fromUser($user);
        } catch (\Throwable|\Exception $e) {
            return ResponseService::exception('users.login', null, $e);
        }
        
        return response()->json(compact('token'));
    }


    public function show(int $id) {
        $usuario = User::find($id);

        if (!$usuario)
            return response(status: 404);

        return $usuario;
    }

    public function update(Request $request, int $id) {
        $usuario = User::find($id);
        $nome = $request->input('nome');
        $email = $request->input('email');
        $senha = $request->input('senha');

        if ($nome)
            $usuario->nome = $nome;
        
        if ($email)
            $usuario->email = $email;

        if ($nome)
            $usuario->senha = $senha;

        $usuario->save();
    }

    public function destroy (int $id) {
        $documentos = Documento::where('usu_id', $id)->get();

        foreach($documentos as $documento) {
            $documento->delete();
        }

        $usuario = User::find($id);
        
        if (!$usuario)
            return response(status: 404);
        $usuario->delete();
    }

    public function logout(Request $request) {
        try {
            $token = $request->bearerToken(); //recebe o token do cabeçalho
            if (!JWTAuth::invalidate($token)) { //tenta invalidar o token
                throw new \Exception('Erro. Tente novamente.', -404);
            }
            return response(['status' => true, 'msg' => 'Deslogado com sucesso'], 200);
        } catch (\Throwable|\Exception $e) {
            return ResponseService::exception('users.logout', null, $e);
        }
    }
}
