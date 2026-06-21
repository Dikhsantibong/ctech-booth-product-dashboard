import { Head, useForm, usePage } from '@inertiajs/react';
import type { FormEvent } from 'react';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';

interface SharedData {
    name: string;
    appLogo?: string;
    primaryColor?: string;
    [key: string]: any;
}

export default function BrandSettings() {
    const { name, appLogo, primaryColor } = usePage<SharedData>().props;

    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        app_name: name || '',
        primary_color: primaryColor || '',
        app_logo: null as File | null,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/settings/brand', {
            preserveScroll: true,
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Brand settings" />

            <div className="space-y-6">
                <Heading
                    variant="small"
                    title="Brand settings"
                    description="Update your brand name, logo, and primary color."
                />

                <form onSubmit={submit} className="space-y-6">
                    <div className="space-y-1">
                        <Label htmlFor="app_name">App Name</Label>
                        <Input
                            id="app_name"
                            name="app_name"
                            value={data.app_name}
                            onChange={(e) => setData('app_name', e.target.value)}
                            required
                        />
                        <InputError message={errors.app_name} />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="primary_color">Primary Color (Hex, e.g. #ff0000)</Label>
                        <div className="flex items-center space-x-2">
                            <input
                                type="color"
                                id="color_picker"
                                value={data.primary_color?.startsWith('#') ? data.primary_color : '#000000'}
                                onChange={(e) => setData('primary_color', e.target.value)}
                                className="h-10 w-10 cursor-pointer rounded-md border"
                            />
                            <Input
                                id="primary_color"
                                name="primary_color"
                                value={data.primary_color}
                                onChange={(e) => setData('primary_color', e.target.value)}
                                placeholder="e.g. #ff0000"
                            />
                        </div>
                        <InputError message={errors.primary_color} />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="app_logo">App Logo</Label>
                        {appLogo && (
                            <div className="mb-2">
                                <img src={appLogo} alt="Current Logo" className="h-16 object-contain bg-muted p-1 rounded-md" />
                            </div>
                        )}
                        <Input
                            id="app_logo"
                            name="app_logo"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setData('app_logo', e.target.files?.[0] || null)}
                        />
                        <InputError message={errors.app_logo} />
                        <p className="text-sm text-muted-foreground mt-1">Leave empty to keep the current logo.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Save Changes</Button>

                        {recentlySuccessful && (
                            <p className="text-sm text-muted-foreground">Saved.</p>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}

BrandSettings.layout = {
    breadcrumbs: [
        {
            title: 'Brand settings',
            href: '/settings/brand',
        },
    ],
};
