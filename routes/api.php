<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\SportsController;
use App\Http\Controllers\Sport_titleController;
use App\Http\Controllers\ToDoController;
use App\Http\Controllers\ToDoDetailController;
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

Route::post( 'logout', [LoginController::class, 'logout'] );

// Route::group( ['middleware' => ['auth:sanctum']], function () {
//     Route::middleware( 'api' )->get( '/user', function ( Request $request ) {
//         return $request->user();
//     } );
// } );
Route::apiResource( 'sports', SportsController::class );
Route::apiResource( 'players', PlayerController::class );
Route::apiResource( 'sportTitles', Sport_titleController::class );

Route::resource( 'toDos', ToDoController::class );
Route::resource( 'toDoDetails', ToDoDetailController::class );

// Route::middleware( 'auth:sanctum' )->group( function () {
//     Route::get( '/user', function () {
//         return 'ok';
//     } );
// } );

Route::group( ['middleware' => ['auth:sanctum']], function () {
    Route::get( '/user', function () {
        return 'ok';
    } );
} );

// Route::get( '/getUser', [LoginController::class, 'getUser'] );
