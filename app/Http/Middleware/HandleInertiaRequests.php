<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $machines = \App\Models\Machine::orderBy('name')->get();
        $activeMachineId = $request->session()->get('active_machine_id');
        $activeMachine = $machines->firstWhere('id', $activeMachineId) ?? $machines->first();

        // Optional: auto-set session if it's missing but we have a machine
        if (!$activeMachineId && $activeMachine) {
            $request->session()->put('active_machine_id', $activeMachine->id);
        }

        $appName = \App\Models\AppSetting::get('app_name', config('app.name'));
        $appLogo = \App\Models\AppSetting::get('app_logo') ? \Illuminate\Support\Facades\Storage::url(\App\Models\AppSetting::get('app_logo')) : null;
        $primaryColor = \App\Models\AppSetting::get('primary_color');

        return [
            ...parent::share($request),
            'name' => $appName,
            'appLogo' => $appLogo,
            'primaryColor' => $primaryColor,
            'auth' => [
                'user' => $request->user(),
            ],
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
            'machines' => $machines,
            'activeMachine' => $activeMachine,
        ];
    }
}
