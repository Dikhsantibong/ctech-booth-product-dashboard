<?php

namespace App\Http\Controllers;

use App\Models\FinalImage;
use Illuminate\Http\Request;

class DownloadController extends Controller
{
    public function show(string $token)
    {
        $finalImage = FinalImage::with(['transaction.machine', 'transaction.photos'])
            ->where('token', $token)
            ->firstOrFail();

        $settings = \App\Models\AppSetting::pluck('value', 'key');
        $appName = $settings['app_name'] ?? config('app.name', 'Potopi');
        $appLogo = !empty($settings['app_logo']) ? asset('storage/' . $settings['app_logo']) : asset('images/logo.png');
        $primaryColor = $settings['primary_color'] ?? '#3b82f6';

        return view('downloads', compact('finalImage', 'appName', 'appLogo', 'primaryColor'));
    }
}
