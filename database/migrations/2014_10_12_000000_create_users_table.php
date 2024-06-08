<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('phone')->nullable();
            $table->string('role')->default('User');
            $table->rememberToken();
            $table->timestamps();
        });
       
        // Create a default admin user
        User::create([
            'name' => 'Admin',
            'email' => 'admin@themesbrand.com',
            'password' => Hash::make('12345678'),
            'email_verified_at' => now(),
            'role' => 'Admin', // Assigning 'Admin' role to the default admin user
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
