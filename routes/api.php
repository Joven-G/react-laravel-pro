<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\SportsController;
use App\Http\Controllers\Sport_titleController;
use App\Http\Controllers\ToDoController;
use App\Http\Controllers\ToDoDetailController;
use Doctrine\DBAL\Driver\Middleware;
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

Route::post( 'logout', [LoginController::class, 'logout'] );

Route::group( ['middleware' => ['auth:sanctum']], function () {} );
Route::apiResource( 'sports', SportsController::class );
Route::apiResource( 'players', PlayerController::class );
Route::apiResource( 'sportTitles', Sport_titleController::class );
Route::middleware( 'auth:api' )->get( '/user', function ( Request $request ) {
    return $request->user();
} );

Route::resource( 'toDos', ToDoController::class );
Route::resource( 'toDoDetails', ToDoDetailController::class );
