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
                'ifsc_code' => $validatedData['ifsc_code'],
                'status' => 'pending'
            ]
        );


        return redirect()->back()->with('success', 'KYC details saved successfully.');
    }

    public function toggleKYCStatus($userId)
    {
        try {
            $userKyc = UserKyc::where('user_id', $userId)->firstOrFail();
    
            // Toggle is_verified status
            $userKyc->is_verified = !$userKyc->is_verified;
            $userKyc->status = $userKyc->is_verified ? 'approved' : 'pending';
            $userKyc->save();
    
            return Inertia::render('Profile');
            // return response()->json(['message' => 'KYC status updated successfully', 'userKyc' => $userKyc]);
        } catch (\Exception $e) {
            return Inertia::render('Profile');
            // return response()->json(['error' => 'Failed to update KYC status'], 500);
        }
    }
    
    public function rejectKYC($userId)
    {
        try {
            $userKyc = UserKyc::where('user_id', $userId)->firstOrFail();
    
            // Reject KYC
            $userKyc->status = 'rejected';
            $userKyc->is_verified = false;
            $userKyc->save();
    
            return Inertia::render('Profile');
            // return response()->json(['message' => 'KYC rejected successfully', 'userKyc' => $userKyc]);
        } catch (\Exception $e) {
            return Inertia::render('Profile');
            // return response()->json(['error' => 'Failed to reject KYC'], 500);
        }
    }
}
