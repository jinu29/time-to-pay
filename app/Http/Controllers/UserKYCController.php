<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserKyc;
use Inertia\Inertia;

class UserKYCController extends Controller
{
      // public function UserKYC()
    // {
    //     return Inertia::render('Profile');
    // }
    public function UserKYCStore(Request $request)
    {
        $validatedData = $request->validate([
            'aadhar_number' => 'required|string',
            'pan_number' => 'required|string',
            'account_number' => 'required|string',
            'ifsc_code' => 'required|string',
        ]);
        
        $user = auth()->user(); // Assuming user is authenticated
       
        $kyc = UserKyc::updateOrCreate(
            ['user_id' => $user->id],
            [
                'aadhar_number' => $validatedData['aadhar_number'],
                'pan_number' => $validatedData['pan_number'],
                'account_number' => $validatedData['account_number'],
                'ifsc_code' => $validatedData['ifsc_code']
            ]
        );


        return redirect()->back()->with('success', 'KYC details saved successfully.');
    }
}
