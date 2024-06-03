<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\RedirectResponse;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PagesController extends Controller
{
    public function EKOConf(): Response
    {
        $settings = settings(); 
        return Inertia::render('Eko/index', ['settings' => $settings]);
    }
}
