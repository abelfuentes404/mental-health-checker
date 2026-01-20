import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['es', 'en', 'pt'],

    // Used when no locale matches
    defaultLocale: 'es',

    // Locale prefix for non-default locales
    localePrefix: 'as-needed', // 'always' | 'as-needed' | 'never'

    // Pathnames are transformed to use the locale
    pathnames: {
        // Home
        '/': '/',

        // Tests
        '/test/depresion': {
            es: '/test/depresion',
            en: '/test/depression',
            pt: '/test/depressao'
        },
        '/test/ansiedad': {
            es: '/test/ansiedad',
            en: '/test/anxiety',
            pt: '/test/ansiedade'
        },

        // Other pages
        '/recursos': {
            es: '/recursos',
            en: '/resources',
            pt: '/recursos'
        },
        '/informacion': {
            es: '/informacion',
            en: '/information',
            pt: '/informacao'
        },
        '/articulos': {
            es: '/articulos',
            en: '/articles',
            pt: '/artigos'
        }
    }
});

// Lightweight helpers for navigation
export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);