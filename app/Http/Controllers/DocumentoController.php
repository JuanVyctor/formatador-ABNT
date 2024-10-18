<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Documento;

class DocumentoController extends Controller
{
    public function index() {
        $documentos = Documento::all();
        return $documentos;
    }

    public function store(Request $request) {
        $texto = $request->input('texto');
        $usuario = auth()->user()->id();

        $d = Documento::create(['doc_texto' => $texto, 'doc_usu_id' => $usuario]);
        $d->save();

        return response(
            ['location' => ('documentos.show'. $d->id())], 201
        );
    }

    public function show(Documento $documento) {
        return $documento;
    }

    public function update(Request $request, Documento $documento) {
        $texto = $request->input('texto');

        if ($texto)
            $documento->doc_texto = $texto;

        $documento->save();
    }

    public function destroy (Documento $documento) {
        $documento->delete();
    }
}
