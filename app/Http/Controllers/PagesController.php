<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function pages_starter()
    {
        return Inertia::render('Pages/Starter/Starter');
    }
}
