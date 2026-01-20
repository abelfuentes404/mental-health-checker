'use client';

import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'Inicio', href: '/' },
        { label: 'Test de Depresión', href: '/test/depresion' },
        { label: 'Test de Ansiedad', href: '/test/ansiedad' },
        { label: 'Recursos', href: '/recursos' },
        { label: 'Información', href: '/informacion' },
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
                            <h1 className="text-xl font-bold text-gray-900">Mental Health Check</h1>
                            <p className="text-xs text-gray-600">Evaluación y recursos de salud mental</p>
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
                        <Button variant="primary" size="sm">
                            Comenzar Test
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
                            <Button variant="primary" className="w-full">
                                Comenzar Test
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}