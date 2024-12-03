<?php

namespace App\Http\Controllers;

use App\Models\Documento;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index() {
        $usuarios = User::all();
        return $usuarios;
    }

    public function store(Request $request) {
        $dados = $request->validate([
            'nome' => ['required'],
            'email' => ['required', 'email'],
            'senha' => ['required'],
        ]);

        $nome = $dados['nome'];
        $email = $dados['email'];
        $senha = $dados['senha'];

        $u = User::create(['nome' => $nome, 'email' => $email, 'senha' => bcrypt($senha)]);
        $u->save();

        return response(
            ['location' => ('usuarios/'. $u->id)], 201
        );
    }

    public function login(Request $request) {
        $dados = $request->validate([
            'email' => ['required', 'email'],
            'senha' => ['required'],
        ]);

        $u = User::where('email', $dados['email'])->where('senha', $dados['senha']);
        
        // if (Auth::attempt($dados)) {
            $request->session()->regenerate();
 
            // return redirect()->intended('dashboard');
        // }

        return response(
            ['location' => ('usuarios/'. $u->id)], 200
        );
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
}
