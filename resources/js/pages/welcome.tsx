import { Head, Link, usePage } from '@inertiajs/react';
import { Camera, Download, LayoutDashboard, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { dashboard, login } from '@/routes';
import { BrandInjector } from '@/components/brand-injector';

const features = [
    {
        icon: Sparkles,
        title: 'Templates & layout',
        description:
            'Design photobooth frames, stickers, and paper sizes so every event matches your brand.',
    },
    {
        icon: Camera,
        title: 'Sessions & gallery',
        description:
            'Track transactions, review captures, and manage media from one organized dashboard.',
    },
    {
        icon: Download,
        title: 'Guest downloads',
        description:
            'Share a simple link so guests pick up prints and live photos when the party ends.',
    },
] as const;

export default function Welcome() {
    const { auth, name, appLogo } = usePage<any>().props;

    return (
        <>
            <BrandInjector />
            <Head title={name} />

            <div className="relative min-h-svh overflow-x-hidden bg-black text-zinc-100">
                <div
                    className="pointer-events-none fixed inset-0"
                    aria-hidden
                    style={{
                        background:
                            'radial-gradient(ellipse 100% 60% at 50% -25%, rgba(37,99,235,0.08), transparent 55%), radial-gradient(circle at 100% 0%, rgba(37,99,235,0.04), transparent 40%)',
                    }}
                />
                <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

                <header className="relative z-10 border-b border-zinc-800 bg-black/75 backdrop-blur-xl">
                    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                        <div className="rounded-xl bg-white/10 p-2.5 ring-1 ring-white/20">
                            <img
                                src={appLogo || "/images/logo.png"}
                                alt={name}
                                className="h-8 w-auto max-w-[140px] object-contain sm:h-9 sm:max-w-[170px]"
                                decoding="async"
                            />
                        </div>
                        <nav className="flex items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className={cn(
                                        'inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90',
                                    )}
                                >
                                    <LayoutDashboard className="size-4" />
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={login()}
                                    className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
                                >
                                    Log in
                                </Link>
                            )}
                        </nav>
                    </div>
                </header>

                <main className="relative z-10">
                    <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                                Booth operations, simplified
                            </p>
                            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                                Run your photobooth business from one place
                            </h1>
                            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
                                {name} helps you manage machines, templates, vouchers, and
                                guest downloads—so you spend less time on admin and more
                                time at the event.
                            </p>
                            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                                {auth.user ? (
                                    <Link
                                        href={dashboard()}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition hover:opacity-90 sm:w-auto"
                                    >
                                        <LayoutDashboard className="size-5" />
                                        Open dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={login()}
                                            className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition hover:opacity-90 sm:w-auto"
                                        >
                                            Sign in to dashboard
                                        </Link>
                                        <a
                                            href="#features"
                                            className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-3.5 text-base font-medium text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10 sm:w-auto"
                                        >
                                            See what&apos;s inside
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>

                    <section
                        id="features"
                        className="border-t border-zinc-800 bg-black py-16 sm:py-20 lg:py-24"
                    >
                        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                                    Built for busy booth teams
                                </h2>
                                <p className="mt-3 text-zinc-400">
                                    Everything you need behind the curtain—without the
                                    spreadsheet chaos.
                                </p>
                            </div>
                            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                                {features.map(({ icon: Icon, title, description }) => (
                                    <li
                                        key={title}
                                        className="group rounded-2xl border border-zinc-800 bg-black p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition hover:border-primary/30 hover:bg-white/5 sm:p-7"
                                    >
                                        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition group-hover:bg-primary/15">
                                            <Icon className="size-5" strokeWidth={2} />
                                        </div>
                                        <h3 className="mt-5 text-lg font-semibold text-zinc-100">
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                            {description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="border-t border-zinc-800 py-14 sm:py-16">
                        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                            <p className="text-lg font-medium text-zinc-100 sm:text-xl">
                                Ready when you are.
                            </p>
                            <p className="mt-2 text-zinc-400">
                                {auth.user
                                    ? "Head to your dashboard to manage today's events."
                                    : 'Log in with your team account to get started.'}
                            </p>
                            <div className="mt-8">
                                {auth.user ? (
                                    <Link
                                        href={dashboard()}
                                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
                                    >
                                        Go to dashboard
                                    </Link>
                                ) : (
                                    <Link
                                        href={login()}
                                        className="inline-flex items-center rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
                                    >
                                        Log in
                                    </Link>
                                )}
                            </div>
                        </div>
                    </section>

                    <footer className="border-t border-zinc-800 py-8">
                        <p className="text-center text-sm text-zinc-500">
                            © {new Date().getFullYear()} {name}. All rights
                            reserved.
                        </p>
                    </footer>
                </main>
            </div>
        </>
    );
}
