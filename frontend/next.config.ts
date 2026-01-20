import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de i18n
  i18n: {
    locales: ['es', 'en', 'pt'], // Idiomas soportados
    defaultLocale: 'es',          // Idioma por defecto
    localeDetection: true,        // Detectar idioma del navegador
  },
};

export default nextConfig;