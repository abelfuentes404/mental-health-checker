import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/lib/i18n/routing';
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CrisisBanner } from "@/components/layout/CrisisBanner";

const inter = Inter({ subsets: ["latin"] });

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

// Generate metadata based on locale
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const titles = {
        es: "Mental Health Check - Evaluación de salud mental",
        en: "Mental Health Check - Mental health assessment",
        pt: "Mental Health Check - Avaliação de saúde mental"
    };

    const descriptions = {
        es: "Herramienta de autoevaluación para depresión y ansiedad. Encuentra recursos y ayuda profesional.",
        en: "Self-assessment tool for depression and anxiety. Find resources and professional help.",
        pt: "Ferramenta de autoavaliação para depressão e ansiedade. Encontre recursos e ajuda profissional."
    };

    return {
        title: titles[locale as keyof typeof titles] || titles.es,
        description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
        keywords: ["salud mental", "depresión", "ansiedad", "test psicológico", "ayuda psicológica"],
        authors: [{ name: "Mental Health Check" }],
        robots: "index, follow",
        openGraph: {
            type: "website",
            locale: locale,
            title: titles[locale as keyof typeof titles] || titles.es,
            description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
        },
    };
}

// Generate static params for all locales
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: Props) {
    // Ensure that the incoming locale is valid
    if (!routing.locales.includes(params.locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    const messages = await getMessages();

    return (
        <html lang={params.locale}>
            <body className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white`}>
                <NextIntlClientProvider messages={messages}>
                    <CrisisBanner />
                    <Header locale={params.locale} />
                    <main className="flex-1 container mx-auto px-4 py-8">
                        {children}
                    </main>
                    <Footer locale={params.locale} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}