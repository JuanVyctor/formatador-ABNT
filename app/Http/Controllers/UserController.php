<?php

namespace App\Http\Controllers;

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
        $nome = $request->input('nome');
        $email = $request->input('email');
        $senha = $request->input('senha');
        $u = User::create(['nome' => $nome, 'email' => $email, 'senha' => bcrypt($senha)]);
        $u->save();

        return response(
            ['location' => ('usuarios/'. $u->id)], 201
        );
    }

    public function show(User $usuario) {
        return $usuario;
    }

    public function update(Request $request, User $usuario) {
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

    public function destroy (User $usuario) {
        $usuario->delete();
    }
}
