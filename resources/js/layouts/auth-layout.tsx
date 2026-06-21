import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';
import { BrandInjector } from '@/components/brand-injector';

export default function AuthLayout({
    title = '',
    description = '',
    children,
}: {
    title?: string;
    description?: string;
    children: React.ReactNode;
}) {
    return (
        <AuthLayoutTemplate title={title} description={description}>
            <BrandInjector />
            {children}
        </AuthLayoutTemplate>
    );
}
