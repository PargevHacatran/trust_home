<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatController;

Route::get('/', function () {
    return view('welcome');
});

Route::post("/chat/send", [ChatController::class, "send"]);
Route::get("/chat/messages/{room_id}", [ChatController::class, "history"])->middleware("can:view,room");