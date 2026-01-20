'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { getPHQ9Interpretation } from '@/lib/phq9';
import { Share2, Download, Home, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

interface PHQ9Result {
    score: number;
    level: string;
    severity: string;
    color: string;
    recommendations: string[];
    action: string;
}

export default function DepressionResultsPage() {
    const router = useRouter();
    const [result, setResult] = useState<PHQ9Result | null>(null);

    useEffect(() => {
        // Obtener resultados de sessionStorage
        const score = sessionStorage.getItem('phq9_score');
        const interpretation = sessionStorage.getItem('phq9_interpretation');

        if (!score || !interpretation) {
            router.push('/test/depresion');
            return;
        }

        const parsedInterpretation = JSON.parse(interpretation);
        setResult({
            score: parseInt(score),
            ...parsedInterpretation
        });
    }, [router]);

    if (!result) {
        return (
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="text-center py-12">
                    <h1 className="text-2xl font-bold text-gray-900">Cargando resultados...</h1>
                </div>
            </div>
        );
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Mis resultados del test de depresión',
                text: `Obtuve una puntuación de ${result.score} en el test PHQ-9. ${result.severity}`,
                url: window.location.href,
            });
        }
    };

    const handleDownload = () => {
        const content = `
      Resultados del Test de Depresión (PHQ-9)
      Fecha: ${new Date().toLocaleDateString('es-ES')}
      
      Puntuación total: ${result.score}
      Nivel: ${result.severity}
      
      Recomendaciones:
      ${result.recommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}
      
      Acción recomendada: ${result.action}
      
      ---
      Nota: Este no es un diagnóstico médico. Consulta a un profesional de salud mental.
      Generado por Mental Health Check (mentalhealthcheck.org)
    `;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `resultados-depresion-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Tus Resultados</h1>
                <p className="text-gray-600 mt-2">Test de Depresión (PHQ-9)</p>
            </div>

            {/* Score Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Puntuación Total</h2>
                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${result.color} text-white text-3xl font-bold mb-4`}>
                            {result.score}
                        </div>
                        <p className="text-lg font-semibold text-gray-900">{result.severity}</p>
                        <p className="text-gray-600">Nivel: {result.level}</p>
                    </div>

                    <div className="flex-1 max-w-md">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Interpretación</h3>
                        <p className="text-gray-700 mb-4">
                            Basado en tus respuestas, {result.action.toLowerCase()}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Button variant="secondary" onClick={handleShare}>
                                <Share2 className="h-4 w-4 mr-2" />
                                Compartir
                            </Button>
                            <Button variant="secondary" onClick={handleDownload}>
                                <Download className="h-4 w-4 mr-2" />
                                Descargar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recomendaciones y Pasos a Seguir</h3>
                <ul className="space-y-4">
                    {result.recommendations.map((recommendation, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            <p className="text-gray-800 flex-1">{recommendation}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Crisis Section */}
            {result.score >= 15 && (
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 md:p-8 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Ayuda Inmediata
                    </h3>
                    <p className="text-red-800 mb-4">
                        Según tus resultados, te recomendamos buscar ayuda profesional lo antes posible.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <a
                            href="tel:024"
                            className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
                        >
                            <Phone className="h-5 w-5" />
                            <div>
                                <p className="font-bold">Línea 024</p>
                                <p className="text-sm">Prevención del suicidio (España)</p>
                            </div>
                        </a>
                        <Link
                            href="/recursos"
                            className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
                        >
                            <MapPin className="h-5 w-5" />
                            <div>
                                <p className="font-bold">Buscar Ayuda Local</p>
                                <p className="text-sm">Profesionales cerca de ti</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}

            {/* Next Steps */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Link href="/recursos">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer h-full">
                        <div className="text-primary-600 mb-4">
                            <MapPin className="h-8 w-8" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Encontrar Ayuda Profesional</h4>
                        <p className="text-gray-600 text-sm">
                            Directorio de psicólogos, psiquiatras y centros de salud mental verificados.
                        </p>
                    </div>
                </Link>

                <Link href="/informacion">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer h-full">
                        <div className="text-primary-600 mb-4">
                            <Home className="h-8 w-8" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Recursos Educativos</h4>
                        <p className="text-gray-600 text-sm">
                            Artículos, técnicas y herramientas para el manejo de la depresión.
                        </p>
                    </div>
                </Link>

                <Link href="/test/ansiedad">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer h-full">
                        <div className="text-primary-600 mb-4">
                            <Home className="h-8 w-8" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Test de Ansiedad</h4>
                        <p className="text-gray-600 text-sm">
                            Evalúa síntomas de ansiedad con el test GAD-7.
                        </p>
                    </div>
                </Link>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h4 className="font-bold text-yellow-900 mb-2">Aviso Importante</h4>
                <p className="text-yellow-800 text-sm">
                    Este resultado no constituye un diagnóstico médico. Es una herramienta de orientación basada en tus respuestas al cuestionario PHQ-9. Si tienes dudas sobre tu salud mental, consulta con un profesional cualificado.
                </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button variant="primary" asChild>
                    <Link href="/">
                        <Home className="h-4 w-4 mr-2" />
                        Volver al Inicio
                    </Link>
                </Button>
                <Button variant="secondary" onClick={() => router.push('/test/depresion')}>
                    Realizar Test Nuevamente
                </Button>
            </div>
        </div>
    );
}