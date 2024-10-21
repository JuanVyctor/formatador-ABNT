<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Documento;
use App\Models\User;

class DocumentoController extends Controller
{
    public function index(User $user) {
        $documentos = Documento::where('usu_id', '=', $user->id)->get();
        // Achar porque isso não tá funcionando
        return $documentos;
    }

    public function store(Request $request) {
        $texto = $request->input('texto');
        $usuario = $request->input('usu_id');

        $d = Documento::create(['texto' => $texto, 'usu_id' => $usuario]);
        $d->save();

        return response(
            ['location' => ('documentos/'. $d->id)], 201
        );
    }

    public function show(Documento $documento) {
        return $documento;
    }

    public function update(Request $request, Documento $documento) {
        $texto = $request->input('texto');

        if ($texto)
            $documento->texto = $texto;

        $documento->save();
    }

    public function destroy (Documento $documento) {
        $documento->delete();
    }
}
