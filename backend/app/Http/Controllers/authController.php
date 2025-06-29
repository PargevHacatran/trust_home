<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $validated = $request->validate([
                'login' => 'required|unique:users',
                'password' => 'required|min:6',
                'name' => 'required',
                'surname' => 'required',
                'phone_number' => 'required|unique:users',
                'email' => 'required|email|unique:users',
            ]);

            $user = User::create([
                'login' => $validated['login'],
                'password' => Hash::make($validated['password']),
                'name' => $validated['name'],
                'surname' => $validated['surname'],
                'phone_number' => $validated['phone_number'],
                'email' => $validated['email'],
                'second_name' => $request->second_name ?? null,
            ]);

            return response()->json([
                'user' => $user,
                'message' => 'Регистрация успешна'
            ], 201);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            \Log::error('Ошибка регистрации: ' . $e->getMessage());
            return response()->json(['message' => 'Ошибка сервера'], 500);
        }
    }

   public function login(Request $request)
{
    $validator = Validator::make($request->all(), [
        'login' => 'required|string',
        'password' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    $user = User::where('login', $request->login)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['error' => 'Неверный логин или пароль'], 401);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'user' => [
            'id' => $user->id,
            'login' => $user->login,
            'name' => $user->name,
            'email' => $user->email
        ],
        'token' => $token,
        'message' => 'Вход выполнен успешно'
    ]);
}

    public function logout(Request $request)
    {
        try {
            $request->user()->tokens()->delete();
            return response()->json(['message' => 'Выход выполнен']);
        } catch (\Exception $e) {
            Log::error('Logout error: '.$e->getMessage());
            return response()->json(['message' => 'Ошибка при выходе'], 500);
        }
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}