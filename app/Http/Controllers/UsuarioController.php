<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    public function index() {
        $usuarios = Usuario::all();
        return $usuarios;
    }

    public function store(Request $request) {
        $nome = $request->input('nome');
        $email = $request->input('email');
        $senha = $request->input('senha');
        $u = Usuario::create(['usu_nome' => $nome, 'usu_email' => $email, 'usu_senha' => bcrypt($senha)]);
        $u->save();

        return response(
            ['location' => ('usuarios.show'. $u->id())], 201
        );
    }

    public function show(Usuario $usuario) {
        return $usuario;
    }

    public function update(Request $request, Usuario $usuario) {
        $nome = $request->input('nome');
        $email = $request->input('email');
        $senha = $request->input('senha');

        if ($nome)
            $usuario->usu_nome = $nome;
        
        if ($email)
            $usuario->usu_email = $email;

        if ($nome)
            $usuario->usu_senha = $senha;

        $usuario->save();
    }

    public function destroy (Usuario $usuario) {
        $usuario->delete();
    }
}
