<?php

namespace App\Http\Controllers;

class DisplayController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function reactView()
    {
        return view('react');
    }
}
