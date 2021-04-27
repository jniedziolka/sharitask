<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TaskController;

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

Route::middleware('auth:sanctum')->group(function() {
   Route::get('/jsonTasks', [TaskController::class, 'getJsonTasks'])->name('task.getJsonTasks');
   Route::get('/taskStatuses', [TaskController::class, 'getTaskStatuses'])->name('task.getTaskStatuses');
   Route::get('/taskVisibilities', [TaskController::class, 'getTaskVisibilities'])->name('task.getTaskVisibilities');
});

Route::middleware('auth:sanctum')->get('/jsonTasks', [TaskController::class, 'getJsonTasks'])->name('task.getJsonTasks');
