'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { AlertTriangle, Shield, X } from 'lucide-react';

interface DisclaimerModalProps {
    onAccept: () => void;
    testName: string;
}

export function DisclaimerModal({ onAccept, testName }: DisclaimerModalProps) {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
        onAccept();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                                <AlertTriangle className="h-6 w-6 text-red-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Aviso Importante</h2>
                        </div>
                        <button
                            onClick={() => window.history.back()}
                            className="p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                            <p className="text-yellow-800 font-medium">
                                Esta herramienta tiene fines informativos y de orientación personal únicamente.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-900">Limitaciones del test</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span>No constituye un diagnóstico médico ni psicológico, ni sustituye la evaluación, diagnóstico o tratamiento realizado por un profesional de la salud mental.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span>Los resultados se basan en cuestionarios estandarizados y reflejan únicamente las respuestas proporcionadas por el usuario en el momento de la evaluación.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span>Si presentas malestar emocional intenso, pensamientos de autolesión o consideras que podrías estar en peligro, busca ayuda profesional inmediata o comunícate con los servicios de emergencia de tu país.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Shield className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span>El uso de esta plataforma es voluntario y bajo tu propia responsabilidad.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2">Test utilizado: {testName}</h4>
                            <p className="text-blue-800 text-sm">
                                Este test se basa en el cuestionario PHQ-9 (Patient Health Questionnaire-9),
                                desarrollado por Kroenke, Spitzer & Williams. Es un instrumento validado para
                                la detección de síntomas depresivos en población adulta.
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Button
                            variant="secondary"
                            className="flex-1"
                            onClick={() => window.history.back()}
                        >
                            Salir del test
                        </Button>
                        <Button
                            variant="primary"
                            className="flex-1"
                            onClick={handleAccept}
                        >
                            Entiendo y acepto continuar
                        </Button>
                    </div>

                    <p className="text-center text-gray-500 text-sm mt-6">
                        Al continuar, aceptas nuestros <a href="/terminos" className="text-primary-600 hover:underline">Términos</a> y <a href="/privacidad" className="text-primary-600 hover:underline">Privacidad</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}