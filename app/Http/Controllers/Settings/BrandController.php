<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\AppSetting;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BrandController extends Controller
{
    public function edit()
    {
        return Inertia::render('settings/brand', [
            'settings' => [
                'app_name' => AppSetting::get('app_name', config('app.name')),
                'primary_color' => AppSetting::get('primary_color', ''),
                'app_logo' => AppSetting::get('app_logo', null) ? Storage::url(AppSetting::get('app_logo')) : null,
            ],
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'app_name' => ['required', 'string', 'max:255'],
            'primary_color' => ['nullable', 'string', 'max:50'],
            'app_logo' => ['nullable', 'image', 'max:2048'],
        ]);

        AppSetting::set('app_name', $validated['app_name']);
        
        if (isset($validated['primary_color'])) {
            AppSetting::set('primary_color', $validated['primary_color']);
        }

        if ($request->hasFile('app_logo')) {
            $oldLogo = AppSetting::get('app_logo');
            if ($oldLogo) {
                Storage::disk('public')->delete($oldLogo);
            }

            $path = $request->file('app_logo')->store('brand', 'public');
            AppSetting::set('app_logo', $path);
        }

        return redirect()->back()->with('success', 'Brand settings updated.');
    }
}
