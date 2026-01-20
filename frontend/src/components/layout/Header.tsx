'use client';

import { Brain, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/lib/i18n/routing';
import { Button } from '@/components/ui/Button';

interface HeaderProps {
    locale: string;
}

export function Header({ locale }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations('navigation');
    const tc = useTranslations('common');
    const currentLocale = useLocale();
    const pathname = usePathname();

    const locales = [
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
    ];

    const navItems = [
        { label: t('home'), href: '/' },
        { label: t('depressionTest'), href: '/test/depresion' },
        { label: t('anxietyTest'), href: '/test/ansiedad' },
        { label: t('resources'), href: '/recursos' },
        { label: t('information'), href: '/informacion' },
    ];

    return (
        <header className="sticky top-0 z-50 glass-effect border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative">
                            <Brain className="h-8 w-8 text-primary-600" />
                            <div className="absolute -top-1 -right-1 h-3 w-3 bg-mental-mild rounded-full animate-pulse" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">{tc('appName')}</h1>
                            <p className="text-xs text-gray-600">{tc('appDescription')}</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Selector de idioma */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-gray-700 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-100">
                                <Globe className="h-5 w-5" />
                                <span>{locales.find(l => l.code === currentLocale)?.flag} {currentLocale.toUpperCase()}</span>
                            </button>

                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                {locales.map((loc) => (
                                    <Link
                                        key={loc.code}
                                        href={pathname}
                                        locale={loc.code}
                                        className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100"
                                    >
                                        <span className="text-lg">{loc.flag}</span>
                                        <span>{loc.name}</span>
                                        {currentLocale === loc.code && (
                                            <span className="ml-auto text-primary-500">✓</span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Button variant="primary" size="sm" href="/test/depresion">
                            {tc('startTest')}
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menú"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-slide-up">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-700 hover:text-primary-600 py-2 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Selector de idioma móvil */}
                            <div className="pt-4 border-t">
                                <p className="text-sm text-gray-500 mb-2">Idioma / Language</p>
                                <div className="flex flex-wrap gap-2">
                                    {locales.map((loc) => (
                                        <Link
                                            key={loc.code}
                                            href={pathname}
                                            locale={loc.code}
                                            className={`px-3 py-1.5 rounded-full text-sm border ${currentLocale === loc.code
                                                    ? 'bg-primary-100 text-primary-700 border-primary-300'
                                                    : 'bg-gray-100 text-gray-700 border-gray-300'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {loc.flag} {loc.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Button variant="primary" className="w-full mt-4" href="/test/depresion">
                                {tc('startTest')}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}