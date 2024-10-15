<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    use HasFactory;

    protected $table = 'db_documentos';
    
    protected $fillable = [
        'doc_texto',
        'doc_texto_formatado',
        'doc_usu_id',
    ];

    public function usuarios() {
        return $this->belongsTo(Usuario::class);
    }
}
