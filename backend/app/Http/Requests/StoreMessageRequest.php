<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "room_id" => "required|exists:rooms,id",
            "content" => "required|string|max:2000|profancy_filter"
        ];
    }

    public function prepareForValidation ()
    {
        $this->merge([
            "content" => htmlspecialchars(($this->content, ENT_QUOTES, "UTF-8"))
        ])
    }
}
