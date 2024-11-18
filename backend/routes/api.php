<?php

use App\Http\Controllers\DocumentoController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup', [UserController::class, 'store'])->name('signup');

Route::prefix('/usuarios')->name('usuarios.')->group(function () {
    Route::get('/{id}',[UserController::class, 'show'])->name('perfil');
});

Route::get('/documentos/{id}', [DocumentoController::class,'index'])->name('');

Route::prefix('/documento')->name('documento.')->group(function () {
    Route::get('', [DocumentoController::class, 'index'])->name('index');
    Route::post('', [DocumentoController::class, 'store'])->name('store');

    Route::get('/{id}', [DocumentoController::class, 'show'])->name('show');
    Route::put('/{id}', [DocumentoController::class, 'update'])->name('update');
    Route::delete('/{id}', [DocumentoController::class, 'destroy'])->name('destroy');
});