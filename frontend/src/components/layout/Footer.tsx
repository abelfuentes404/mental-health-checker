'use client';

import { Heart, Brain, Shield, Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Test de Depresión', href: '/test/depresion' },
        { label: 'Test de Ansiedad', href: '/test/ansiedad' },
        { label: 'Resultados', href: '/resultados' },
        { label: 'Recursos', href: '/recursos' },
        { label: 'Artículos', href: '/articulos' },
        { label: 'FAQs', href: '/faq' },
    ];

    const legalLinks = [
        { label: 'Política de Privacidad', href: '/privacidad' },
        { label: 'Términos de Uso', href: '/terminos' },
        { label: 'Aviso Legal', href: '/aviso-legal' },
        { label: 'Cookies', href: '/cookies' },
    ];

    const crisisNumbers = [
        { country: 'España', number: '024', description: 'Prevención del suicidio' },
        { country: 'México', number: '800 911 2000', description: 'Línea de la vida' },
        { country: 'Argentina', number: '135', description: 'Atención al suicida' },
        { country: 'Colombia', number: '106', description: 'Línea de apoyo emocional' },
        { country: 'EE.UU.', number: '988', description: 'Suicide & Crisis Lifeline' },
    ];

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-20">
            {/* Línea de crisis destacada */}
            <div className="bg-gradient-to-r from-red-700 to-orange-700 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Phone className="h-6 w-6" />
                            <div>
                                <h3 className="font-bold text-lg">Líneas de crisis 24/7</h3>
                                <p className="text-sm opacity-90">Ayuda inmediata y confidencial</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {crisisNumbers.slice(0, 3).map((crisis) => (
                                <a
                                    key={crisis.country}
                                    href={`tel:${crisis.number.replace(/\s/g, '')}`}
                                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <span className="font-bold">{crisis.number}</span>
                                    <span className="text-sm opacity-90">({crisis.country})</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenido principal del footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Columna 1: Logo y descripción */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <Brain className="h-8 w-8 text-primary-400" />
                                <div className="absolute -top-1 -right-1 h-3 w-3 bg-mental-mild rounded-full animate-pulse" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Mental Health Check</h2>
                                <p className="text-sm text-gray-400">Tu bienestar es importante</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Herramienta de autoevaluación de salud mental basada en evidencia científica.
                            Ofrecemos recursos verificados y apoyo informativo.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="Facebook" className="hover:text-primary-400 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-primary-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:text-primary-400 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-primary-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces rápidos */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <Heart className="h-5 w-5" />
                            Evaluaciones
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Recursos de ayuda */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            Ayuda Inmediata
                        </h3>
                        <ul className="space-y-4">
                            {crisisNumbers.map((crisis) => (
                                <li key={crisis.country}>
                                    <div className="flex items-start gap-3">
                                        <div className="bg-red-500/20 p-1 rounded">
                                            <Phone className="h-4 w-4 text-red-400" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{crisis.country}</p>
                                            <a
                                                href={`tel:${crisis.number.replace(/\s/g, '')}`}
                                                className="text-primary-300 hover:text-primary-200 font-bold text-lg"
                                            >
                                                {crisis.number}
                                            </a>
                                            <p className="text-sm text-gray-400">{crisis.description}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 4: Contacto e información */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            Información Legal
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-gray-400" />
                                <a href="mailto:info@mentalhealthcheck.org" className="hover:text-primary-300">
                                    info@mentalhealthcheck.org
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe className="h-5 w-5 text-gray-400" />
                                <span className="text-gray-400">Español | English</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Aviso de disclaimer médico */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">
                                <strong className="text-gray-300">AVISO IMPORTANTE:</strong> Este sitio web no proporciona
                                diagnóstico médico. La información ofrecida es solo para fines educativos. Si crees que
                                puedes tener una emergencia médica, llama inmediatamente a tu servicio de emergencias local.
                                No ignores los consejos de tu médico profesional por algo que hayas leído en este sitio.
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">
                                © {currentYear} Mental Health Check. Todos los derechos reservados.
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                v1.0.0 | Basado en PHQ-9 y GAD-7
                            </p>
                        </div>
                    </div>
                </div>

                {/* Badges de confianza */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Conexión segura SSL
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Shield className="h-4 w-4" />
                        Datos 100% anónimos
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Brain className="h-4 w-4" />
                        Basado en evidencia científica
                    </div>
                </div>
            </div>
        </footer>
    );
}