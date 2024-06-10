<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserManagementController extends Controller
{
    // Fetch all users
    public function index()
    {
        // return response()->json(User::all());
        // return Inertia::render('UserManagement/index');
        $users = User::all();
        return Inertia::render('UserManagement/UserManagement', ['users' => $users]);
    }

    // Store a new user
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json($user, 201);
    }

    // Update an existing user
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'sometimes|required|string|min:8',
        ]);

        $user->update($request->only(['name', 'email', 'password']));

        if ($request->has('password')) {
            $user->password = Hash::make($request->password);
            $user->save();
        }

        return response()->json($user);
    }

    // Delete a user
    public function destroy($id)
    {
        User::findOrFail($id)->delete();

        return response()->json(null, 204);
    }

    //user kyc tracking
    public function UserKYC()
    {
        // return response()->json(User::all());
        // return Inertia::render('UserManagement/index');
        $users = User::with('kyc')->get();
        return Inertia::render('UserManagement/UserKYC', ['users' => $users]);
    }
    public function UserKYCUpdate(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'aadhaar' => 'nullable|string|max:255',
            'pan' => 'nullable|string|max:255',
            'phone' => 'nullable',
        ]);

        $user = User::create($validatedData);

        return Inertia::render('UserManagement/UserKYC');
    }
    public function UserPaymentReport()
    {
        $users = User::all();
        return Inertia::render('UserManagement/UserPaymentReport', ['users' => $users]);
    }

    //DistributorList
    public function DistributorList()
    {
        $users = User::all();

        return Inertia::render('Distributor/DistributorList', [
            'users' => $users,
        ]);
    }

    // Store a new distributor
    public function DistributorListStore(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'nullable|string|max:20',
            'password' => 'required|string|min:8',
            'role' => 'required|string|max:50',
        ]);

        // Create the new user
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        // Redirect to the distributor list with success message
        // return Redirect::route('user.DistributorList')->with('success', 'Distributor created successfully.');
        // return response()->json($user, 201);
        return Inertia::render('Distributor/DistributorList');
    }

    public function UserKYCProfile()
    {
        
        return Inertia::render('UserManagement/UserKYCProfile');
    }
    public function updateDistributorList(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'password' => 'required|string',
            'role' => 'required|string|in:Distributor,User', 
            'panCard' => 'required|string',
            'aadhaarCard' => 'required|string',
        ]);

        return Inertia::render('UserManagement/UserKYCProfile', [
            'users' => User::all(), 
        ]);
    }
}
