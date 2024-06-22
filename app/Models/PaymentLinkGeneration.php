<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentLinkGeneration extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'Name',
        'Email',
        'phone_number',
        'payment_link',
    ];

    // Additional model logic such as relationships or custom methods can be defined here
}
