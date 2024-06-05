<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

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

    //otp
    public function ShowOTPconf()
    {
        // Assuming you want to display the settings on the page
        $settings = [
            'email_smtp' => config('mail.host'),
            'email_port' => config('mail.port'),
            'email_username' => config('mail.username'),
            'email_password' => config('mail.password'),
            'sms_gateway_url' => config('services.sms.gateway_url'),
            'sms_api_key' => config('services.sms.api_key'),
            'sms_sender_id' => config('services.sms.sender_id'),
            'sms_username' => config('services.sms.username'),
            'sms_password' => config('services.sms.password'),
        ];

        return Inertia::render('OTP&Conf/OTPConf', ['settings' => $settings]);
    }

    public function updateOTPConf(Request $request)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'email_smtp' => 'required|string',
            'email_port' => 'required|string',
            'email_username' => 'required|string',
            'email_password' => 'required|string',
            'sms_gateway_url' => 'required|string',
            'sms_api_key' => 'required|string',
            'sms_sender_id' => 'required|string',
            'sms_username' => 'required|string',
            'sms_password' => 'required|string',
        ]);
        // dd($validator);

        if ($validator->fails()) {
            return redirect()
                ->back()
                ->withErrors($validator)
                ->withInput();
        }

        // Update email settings in configuration
        config([
            'mail.host' => $request->input('email_smtp'),
            'mail.port' => $request->input('email_port'),
            'mail.username' => $request->input('email_username'),
            'mail.password' => $request->input('email_password'),
        ]);

        // Update SMS settings in configuration
        config([
            'services.sms.gateway_url' => $request->input('sms_gateway_url'),
            'services.sms.api_key' => $request->input('sms_api_key'),
            'services.sms.sender_id' => $request->input('sms_sender_id'),
            'services.sms.username' => $request->input('sms_username'),
            'services.sms.password' => $request->input('sms_password'),
        ]);

        // Store settings in the database
        $settings = [
            'email_smtp' => $request->input('email_smtp'),
            'email_port' => $request->input('email_port'),
            'email_username' => $request->input('email_username'),
            'email_password' => $request->input('email_password'),
            'sms_gateway_url' => $request->input('sms_gateway_url'),
            'sms_api_key' => $request->input('sms_api_key'),
            'sms_sender_id' => $request->input('sms_sender_id'),
            'sms_username' => $request->input('sms_username'),
            'sms_password' => $request->input('sms_password'),
        ];

        foreach ($settings as $key => $value) {
            Setting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }

        // Redirect back with success message
        return redirect()
            ->route('settings.showOTPConf')
            ->with('success', 'Settings updated successfully.');
    }
}
