<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Documento extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'texto',
        'texto_formatado',
        'convidado',
        'usu_id',
    ];

    public function usuarios() {
        return $this->belongsTo(User::class);
    }

    public function convidado() : HasMany {
        return $this->hasMany(User::class);
    }
}
