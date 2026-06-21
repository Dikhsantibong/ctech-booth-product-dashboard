import { usePage } from '@inertiajs/react';

export function BrandInjector() {
    const { primaryColor } = usePage<{ primaryColor?: string }>().props;

    if (!primaryColor) return null;

    return (
        <style>
            {`:root {
                --primary: ${primaryColor};
                --ring: ${primaryColor};
            }
            .dark {
                --primary: ${primaryColor};
                --ring: ${primaryColor};
            }`}
        </style>
    );
}
