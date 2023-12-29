<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroupElementController;
use App\Http\Controllers\LevelController;
use App\Http\Controllers\ElementController;
use App\Http\Controllers\AthleteController;
use App\Http\Controllers\GroupAthleteController;
use App\Http\Controllers\MusicController;
use App\Http\Controllers\VariationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('/', function () {
    return view('welcome');
});

Route::get("/group_elements", [GroupElementController::class, "show_all"]);
Route::get("/group_elements/{group_elements_id}/levels", [LevelController::class, "show_all"]);
Route::get("/group_elements/{group_elements_id}/levels/{levels_id}/elements", [ElementController::class, "show_all"]);
Route::get("/group_elements/{group_elements_id}/levels/{levels_id}/elements/{elements_id}/variations", [VariationController::class, "show_all"]);









