<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DisplayController;
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

Route::get( '/', [DisplayController::class, 'reactView'] )->name( 'reactView' );
Route::get( '/form', [DisplayController::class, 'form_test'] )->name( 'form' );
Route::get( '/form_test', [DisplayController::class, 'formReactTest'] )->name( 'react_test' );
Route::get( '/index', [DisplayController::class, 'index'] )->name( 'index' );
Route::get( '/loginAuth', [DisplayController::class, 'loginAuth'] )->name( 'AuthLogin' );

Route::post( 'login', [LoginController::class, 'authenticate'] );
