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

        foreach ($request->except('_token') as $key => $value) {
            settings($key, $value);
        }

        return Redirect::route('settings.showOTPConf')->with('success', 'Settings updated successfully.');


    }
    
    //Business Setting
    public function BusinessSettingShow()
    {
        $settings = [
            'platform_commission' => settings('platform_commission'),
            'vendor_commission' => settings('vendor_commission'),
        ];

        return Inertia::render('BussinessSettings/BussinessSettings', ['settings' => $settings]);
    }
    public function BusinessSettingUpdate(Request $request): RedirectResponse
    {
        $validator = Validator::make($request->all(), [
            'platform_commission' => 'required|numeric|min:0',
            'vendor_commission' => 'required|numeric|min:0',
        ]);

        if ($validator->fails()) {
            return Redirect::route('settings.BusinessSettingShow')
                ->withErrors($validator)
                ->withInput();
        }

        $settings = [
            'platform_commission' => $request->input('platform_commission'),
            'vendor_commission' => $request->input('vendor_commission'),
        ];

      
        foreach ($request->except('_token') as $key => $value) {
            settings($key, $value);
        }

        return Redirect::route('settings.BusinessSettingShow')->with('success', 'Settings updated successfully.');
    }

    //payment conf
    public function PaymentConfShow()
    {
        $settings = [
            'payment_gateway_title' => settings('payment_gateway_title'),
            'api_key' => settings('api_key'),
            'api_secret_key' => settings('api_secret_key'),
            'mode' => settings('mode'),
        ];

        return Inertia::render('PaymentGateway/PaymentGateway', ['settings' => $settings]);
    }
    public function PaymentConfUpdate(Request $request): RedirectResponse
    {
        $validator = Validator::make($request->all(), [
            'payment_gateway_title' => 'required|string',
            'api_key' => 'required|string',
            'api_secret_key' => 'required|string',
            'mode' => 'required|string',
        ]);

        if ($validator->fails()) {
            return Redirect::route('settings.PaymentConfShow')
                ->withErrors($validator)
                ->withInput();
        }

        $settings = [
            'payment_gateway_title' => $request->input('payment_gateway_title'),
            'api_key' => $request->input('api_key'),
            'api_secret_key' => $request->input('api_secret_key'),
            'mode' => $request->input('mode'),
        ];

        // foreach ($settings as $key => $value) {
        //     Setting::updateOrCreate(
        //         ['key' => $key],
        //         ['value' => $value]
        //     );
        // }

        foreach ($request->except('_token') as $key => $value) {
            settings($key, $value);
        }

        return Redirect::route('settings.PaymentConfShow')->with('success', 'Settings updated successfully.');
    }

   // Mobile Conf Show
   public function MobileConfShow()
   {
       $settings = [
           'sms_gateway_url' => settings('sms_gateway_url'),
           'sms_api_key' => settings('sms_api_key'),
           'sms_sender_id' => settings('sms_sender_id'),
           'sms_username' => settings('sms_username'),
           'sms_password' => settings('sms_password'),
           'encryption_type' => settings('encryption_type'),
       ];

       return Inertia::render('OTP&Conf/MobileOtpConfig', ['settings' => $settings]);
   }

   public function MobileConfUpdate(Request $request)
   {
       $validator = Validator::make($request->all(), [
           'sms_gateway_url' => 'required|string',
           'sms_api_key' => 'required|string',
           'sms_sender_id' => 'required|string',
           'sms_username' => 'required|string',
           'sms_password' => 'required|string',
           'encryption_type' => 'required|string|in:none,ssl,tls',
       ]);

       if ($validator->fails()) {
           return Redirect::route('settings.MobileConfShow')
               ->withErrors($validator)
               ->withInput();
       }

       $settings = [
           'sms_gateway_url' => $request->input('sms_gateway_url'),
           'sms_api_key' => $request->input('sms_api_key'),
           'sms_sender_id' => $request->input('sms_sender_id'),
           'sms_username' => $request->input('sms_username'),
           'sms_password' => $request->input('sms_password'),
           'encryption_type' => $request->input('encryption_type'),
       ];

        foreach ($request->except('_token') as $key => $value) {
            settings($key, $value);
        }

       return Redirect::route('settings.MobileConfShow')->with('success', 'Settings updated successfully.');
   }

   // Email Conf Show
   public function EmailConfShow()
   {
       $settings = [
           'email_smtp' => settings('email_smtp'),
           'email_port' => settings('email_port'),
           'email_username' => settings('email_username'),
           'email_password' => settings('email_password'),
           'email_encryption' => settings('email_encryption'),
       ];

       return Inertia::render('OTP&Conf/EmailOtpConfig', ['settings' => $settings]);
   }

   public function EmailConfUpdate(Request $request)
   {
       $validator = Validator::make($request->all(), [
           'email_smtp' => 'required|string',
           'email_port' => 'required|string',
           'email_username' => 'required|string',
           'email_password' => 'required|string',
           'email_encryption' => 'required|string',
       ]);

       if ($validator->fails()) {
           return Redirect::route('settings.EmailConfShow')
               ->withErrors($validator)
               ->withInput();
       }

       $settings = [
           'email_smtp' => $request->input('email_smtp'),
           'email_port' => $request->input('email_port'),
           'email_username' => $request->input('email_username'),
           'email_password' => $request->input('email_password'),
           'email_encryption' => $request->input('email_encryption'),
       ];

        foreach ($request->except('_token') as $key => $value) {
            settings($key, $value);
        }
   
       return Redirect::route('settings.EmailConfShow')->with('success', 'Email settings updated successfully.');
   }
}
