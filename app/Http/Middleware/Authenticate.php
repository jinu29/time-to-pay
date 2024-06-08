<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     */
    protected function redirectTo(Request $request): ?string
    {

        if (Auth::check()) {
            $user = Auth::user();

            if ($user->role === 'admin') {
                return redirect(RouteServiceProvider::DASHBOARD);
            } else {
                return redirect(RouteServiceProvider::HOME);
            }
        }
        return $request->expectsJson() ? null : route('login');
    }
    
}
