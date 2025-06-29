<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up() {
        // rooms (чаты/комнаты)
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->json("users_list")->nullable();
            $table->string('type')->default('private'); // private|group
            $table->timestamps();
        });

        // messages (сообщения)
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->foreignId('room_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->string("time");
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
