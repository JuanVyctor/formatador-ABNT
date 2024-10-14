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
        $d = Documento::create(['texto' => $texto]);
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
            $documento->texto = $texto;

        $documento->save();
    }

    public function destroy (Documento $documento) {
        $documento->delete();
    }
}
