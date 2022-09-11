<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
 

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware'=>['auth:sanctum']],function(){

    Route::get('check',array('as'=>'get token user','uses'=>'App\Http\Controllers\API\CheckController@check'));
});


Route::controller(AuthController::class)->group(function(){
    Route::post('login','login');
    Route::post('register','register');
});
