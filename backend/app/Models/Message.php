<?php

namespace App\Models;

use Crypt;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ["room_id", "user_id", "content", "time"];

    public function getContentAttribute ($value) 
    {
        try {
            return Crypt::decryptString($value);
        } catch (DecryptException) {
            return response()->json([ "status" => "message had destroyed" ]);
        }
    }

    public function setContentAttribute ($value) 
    {
        $this->attributes["content"] = Crypt::encryptString(($value));
    }

    public function user ()
    {
        return $this->belongsTo(User::class);
    }

    public function room ()
    {
        return $this->belongsTo(Room::class);
    }
}
