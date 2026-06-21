import AppLogoIcon from '@/components/app-logo-icon';
import { usePage } from '@inertiajs/react';

interface SharedData {
    name: string;
    appLogo?: string;
    [key: string]: any;
}

export default function AppLogo() {
    const { name, appLogo } = usePage<SharedData>().props;

    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground overflow-hidden">
                {appLogo ? (
                    <img src={appLogo} alt={name} className="h-full w-full object-cover" />
                ) : (
                    <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
                )}
            </div>
            <div className="ml-2 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    {name}
                </span>
            </div>
        </>
    );
}
