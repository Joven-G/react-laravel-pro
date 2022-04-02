<?php

use Illuminate\Support\Facades\Route;

// use App\Http\Controllers\DisplayController;

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

Route::get('/index', 'App\Http\Controllers\DisplayController@index');
Route::get('/', [App\Http\Controllers\DisplayController::class, 'reactView'])->name('react');
Route::get('/form', [App\Http\Controllers\DisplayController::class, 'form_test'])->name('form');
Route::post('/form_test', [App\Http\Controllers\FormController::class, 'form_test'])->name('form_test');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/formReactTest',[App\Http\Controllers\DisplayController::class,'formReactTest'])->name('react_test');
