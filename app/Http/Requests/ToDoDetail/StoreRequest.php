<?php

namespace App\Http\Requests\ToDoDetail;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'to_do_id' => 'required|exists:to_dos,id',
            'name' => 'required|string'
        ];
    }
}
