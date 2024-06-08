<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class DistributorMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if user is admin
        if (auth()->user()->role === 'admin') {
            return $next($request);
        }

        // For non-admin users, check distributor role
        if (auth()->user()->role !== 'distributor') {
            // If the authenticated user is not a distributor, redirect them to another route
            return redirect('/'); // Redirect to home route for example
        }

        return $next($request);
    }
}
