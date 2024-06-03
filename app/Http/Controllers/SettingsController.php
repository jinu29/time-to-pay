<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class SettingsController extends Controller
{
    public function index()
    {
        $settings = settings();
        return view('settings.index', compact('settings'));
    }

    public function update(Request $request): RedirectResponse
    {

        foreach ($request->except('_token') as $key => $value) {
            settings($key, $value);
        }

        return Redirect::to('/eko');
    }
}
