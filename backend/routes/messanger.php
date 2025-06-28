<?php 

use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function() {
    Route::post("/chat/send", function (Request $request) {
        $message = DB::table("messages")->insert([
            "room_id" => $request->room_id,
            "user_id" => $request->id,
            "content" => $request->content
        ])

        event(new NewMessageSent(
            $request->room_id,
            $request->id,
            $request->content
        ))

        return response()->json([ "status" => "sent" ])
    })

    Route::get('/chat/messages/{room_id}', function ($room_id) {
        return DB::table("messages")
    })
})