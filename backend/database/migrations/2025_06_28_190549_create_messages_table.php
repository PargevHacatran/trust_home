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
        Schema::table('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type')->default('private'); // private|group
            $table->timestamps();
        });

        // room_user (связь пользователей с чатами)
        Schema::table('room_user', function (Blueprint $table) {
            $table->foreignId('room_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->primary(['room_id', 'user_id']);
        });

        // messages (сообщения)
        Schema::table('messages', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->foreignId('room_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->timestamps();
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
