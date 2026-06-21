import { Link, usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { home } from '@/routes';
import { BrandInjector } from '@/components/brand-injector';

interface SharedData {
    name: string;
    appLogo?: string;
    [key: string]: any;
}

export default function LoginBrandLayout({ children }: { children: ReactNode }) {
    const { name, appLogo } = usePage<SharedData>().props;
    
    return (
        <div className="flex min-h-svh flex-col bg-white lg:flex-row">
            <BrandInjector />
            <aside className="relative flex min-h-[38vh] flex-col overflow-hidden bg-primary text-primary-foreground lg:min-h-svh lg:w-[40%] lg:max-w-lg lg:shrink-0">
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden
                    style={{
                        backgroundImage:
                            'radial-gradient(ellipse 120% 80% at 50% -20%, rgba(255,255,255,0.22), transparent 50%), radial-gradient(circle at 100% 100%, rgba(0,0,0,0.18), transparent 45%)',
                    }}
                />
                <div className="relative z-10 flex flex-1 flex-col lg:min-h-0">
                    <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 text-center sm:px-10 lg:py-16">
                        <Link
                            href={home()}
                            className="group outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:rounded-2xl"
                        >
                            <div className="rounded-2xl bg-black/25 p-4 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.45)] ring-1 ring-white/15 backdrop-blur-[2px] transition-transform duration-300 group-hover:scale-[1.02] group-active:scale-[0.99]">
                                <img
                                    src={appLogo || "/images/logo.png"}
                                    alt={name}
                                    className="mx-auto h-auto w-full max-w-[min(72vw,280px)] object-contain sm:max-w-[300px]"
                                    decoding="async"
                                    fetchPriority="high"
                                />
                            </div>
                        </Link>
                        <p className="mt-8 max-w-[20rem] text-pretty text-base font-medium leading-relaxed text-white/95 sm:text-lg">
                            Manage templates, sessions, and guest downloads from
                            one dashboard.
                        </p>
                    </div>
                    <p className="relative z-10 shrink-0 px-6 pb-6 pt-2 text-center text-xs text-white/50 sm:pb-8">
                        © {new Date().getFullYear()} {name}
                    </p>
                </div>
            </aside>

            <main className="relative flex flex-1 flex-col justify-center px-4 py-10 sm:px-6 lg:px-10 lg:py-12 xl:px-16">
                <div
                    className="pointer-events-none absolute inset-0 opacity-50"
                    aria-hidden
                    style={{
                        background:
                            'radial-gradient(ellipse 85% 55% at 50% -10%, var(--color-primary), transparent 50%)',
                    }}
                />
                <div className="relative mx-auto w-full max-w-[420px] rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg shadow-black/5 ring-1 ring-zinc-100 backdrop-blur-xl sm:p-9">
                    <div className="mb-8 text-center">
                        <h1 className="text-[1.65rem] font-semibold tracking-tight text-zinc-900">
                            Welcome back
                        </h1>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                            Sign in with your email to open the dashboard
                        </p>
                    </div>
                    {children}
                </div>
            </main>
        </div>
    );
}
