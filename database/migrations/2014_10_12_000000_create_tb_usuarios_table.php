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
        Schema::create('tb_usuarios', function (Blueprint $table) {
            $table->id('usu_id');
            $table->string('usu_nome');
            $table->string('usu_email')->unique();
            $table->timestamp('usu_email_verificado')->nullable();
            $table->string('usu_senha');
            $table->rememberToken();
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
        Schema::dropIfExists('tb_usuarios');
    }
};
