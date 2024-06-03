<?php

use App\Models\Setting;

if (!function_exists('settings')) {
    /**
     * Get or set the application settings.
     *
     * @param  string|null  $key
     * @param  mixed|null  $value
     * @return mixed
     */
    function settings($key = null, $value = null)
    {
        if (is_null($key)) {
            return Setting::all()->pluck('value', 'key')->toArray();
        }

        if (is_null($value)) {
            $setting = Setting::where('key', $key)->first();
            return $setting ? $setting->value : null;
        }

        return Setting::updateOrCreate(['key' => $key], ['value' => $value]);
    }
}
