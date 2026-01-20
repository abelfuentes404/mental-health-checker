import { LegalLayout } from '@/components/layout/LegalLayout';
import { Brain, AlertCircle } from 'lucide-react';

export default function AttributionPage() {
    return (
        <LegalLayout
            title="Atribución de Tests Utilizados"
            lastUpdated="20 de enero de 2024"
        >
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
                <div className="flex items-start">
                    <Brain className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-semibold text-purple-800">Uso científico</h3>
                        <p className="text-purple-700">
                            Esta plataforma utiliza cuestionarios psicológicos reconocidos y ampliamente utilizados en contextos clínicos y de investigación.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Depresión: PHQ-9
            </h2>
            <p>
                <strong>Desarrollado por:</strong> Kroenke, Spitzer & Williams.
            </p>
            <p>
                <strong>Propósito:</strong> Instrumento validado para la detección de síntomas depresivos en población adulta.
            </p>
            <p>
                <strong>Referencia:</strong> Kroenke, K., Spitzer, R. L., & Williams, J. B. W. (2001). The PHQ-9: Validity of a brief depression severity measure. Journal of General Internal Medicine, 16(9), 606-613.
            </p>

            <h2 className="flex items-center gap-2 mt-8">
                <AlertCircle className="h-5 w-5" />
                Ansiedad: GAD-7
            </h2>
            <p>
                <strong>Desarrollado por:</strong> Spitzer, Kroenke, Williams & Löwe.
            </p>
            <p>
                <strong>Propósito:</strong> Instrumento validado para evaluar la severidad de síntomas de ansiedad generalizada.
            </p>
            <p>
                <strong>Referencia:</strong> Spitzer, R. L., Kroenke, K., Williams, J. B. W., & Löwe, B. (2006). A brief measure for assessing generalized anxiety disorder: The GAD-7. Archives of Internal Medicine, 166(10), 1092-1097.
            </p>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Nota importante</h3>
                <p className="text-gray-700">
                    Estos cuestionarios se utilizan con fines informativos, respetando su estructura y sistema de puntuación, sin modificar su interpretación clínica oficial. Su uso en esta plataforma no implica afiliación con los autores originales.
                </p>
            </div>
        </LegalLayout>
    );
}