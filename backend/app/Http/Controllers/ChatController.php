<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMessageRequest;
use App\Models\Message;
use App\Models\Room;
use Illuminate\Http\Request;

class ChatController extends Controller
{
   public function send (StoreMessageRequest $request) 
   {
        $message = Message::create([
            "room_id" => $request["room_id"],
            "user_id" => $request["user_id"],
            "content" => $request["content"],
            "time" => $request["time"],
        ]);

        event(new NewMessageSent(
            $message->room_id,
            $message->user_id,
            $message->content,
            $message->time,
        ));

        return response()->json($message->load('user'));
   }

    public function history ($room_id)
    {
        $this->authorize('view', Room::findOrFail($room_id));

        return Message::with('user')
            ->where("room_id", $room_id)
            ->orderBy("created_at", "desc")
            ->limit(120)
            ->get();
    }
}
