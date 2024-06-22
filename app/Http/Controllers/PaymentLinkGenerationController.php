<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\PaymentLinkGeneration;

class PaymentLinkGenerationController extends Controller
{
    public function generatePayment()
    {
        $paymentLinks = PaymentLinkGeneration::all();

        // return Inertia::render('PaymentLinkCreate/PaymentLinkCreate', ['paymentLinks' => $paymentLinks]);
        return response()->json($paymentLinks);
    }
    public function generatePaymentLink()
    {
        $paymentLinks = PaymentLinkGeneration::all();

        return Inertia::render('PaymentLinkCreate/PaymentLinkCreate', ['paymentLinks' => $paymentLinks]);
        // return response()->json($paymentLinks);
    }
    public function generatePaymentLinkUpdate(Request $request)
    {
        $validatedData = $request->validate([
            'amount' => 'required|numeric|min:0|max:9999999999.99',
            'Name' => 'required|string',
            'phone_number' => 'required|string',
            'Email' => 'required|email',
        ]);

        $username = str_replace(' ', '', strtolower($validatedData['Name']));
        $randomNumber = rand(100000, 999999);
        $paymentLink = "https://time-to-pay.com/{$username}/{$randomNumber}";

        $paymentRecord = PaymentLinkGeneration::create(array_merge($validatedData, ['payment_link' => $paymentLink]));

        // return response()->json(['message' => 'Payment link generated successfully.', 'paymentLink' => $paymentLink]);
        // return response()->json(['paymentLink' => $paymentLink]);
        return Inertia::render('PaymentLinkCreate/PaymentLinkCreate', [
            'paymentLink' => $paymentLink,
            'validatedData' => $validatedData,
        ]);
    }
}
