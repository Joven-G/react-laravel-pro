<?php

namespace App\Http\Controllers;

use App\Models\User as ModelsUser;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function form()
    {
        return view('Form.form_test');
    }

    public function form_test(Request $request)
    {
        $user = new ModelsUser();
        $data = $request->input('name');
        $user->name = $data;
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        // $user->save();

        return view('Form.form_test', [
            'name' => $data,
        ]);
    }
}
