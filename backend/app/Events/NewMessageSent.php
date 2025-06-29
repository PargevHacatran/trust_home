<?php

namespace App\Events;

use Crypt;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewMessageSent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(
        public int $room_id,
        public string $content,
        public int $user_id,
        public string $time
    ) {}

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return new PresenceChannel("room.{$this->room_id}");
    }

    public function broadcastWith()
    {
        return [
            "content" => Crypt::encryptString($this->content),
            "user_id" => $this->user_id,
            "time" => $this->time,
            "room_id" => $this->room_id
        ];
    }
}
