<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/index', [App\Http\Controllers\DisplayController::class, 'index']);
Route::get('/', [App\Http\Controllers\DisplayController::class, 'reactView']);
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
