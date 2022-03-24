<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function form()
    {
        return view('Form.form_test');
    }

    public function form_test(Request $request)
    {
        $data = $request->input('name');

        return view('Form.form_test', [
            'name' => $data,
        ]);
    }
}
