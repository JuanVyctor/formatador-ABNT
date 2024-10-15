<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_documentos', function (Blueprint $table) {
            $table->id();
            $table->string('doc_texto');
            $table->string('doc_texto_formatado')->nullable();
            $table->bigInteger('doc_usu_id');
            $table->foreign('doc_usu_id')->references('usu_id')->on('tb_usuarios');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_documentos');
    }
};