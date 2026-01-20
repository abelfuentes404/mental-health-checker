import { LegalLayout } from '@/components/layout/LegalLayout';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
    return (
        <LegalLayout
            title="Aviso Legal"
            lastUpdated="20 de enero de 2024"
        >
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-semibold text-yellow-800">Aviso Importante</h3>
                        <p className="text-yellow-700">
                            Esta herramienta tiene fines informativos y de orientación personal únicamente. No constituye un diagnóstico médico ni psicológico.
                        </p>
                    </div>
                </div>
            </div>

            <h2>1. Propósito de la plataforma</h2>
            <p>
                Mental Health Check es una plataforma que proporciona evaluaciones de orientación sobre síntomas de ansiedad y depresión, con fines educativos y de concientización. Al utilizarla, el usuario acepta que no reemplaza atención médica profesional.
            </p>

            <h2>2. No diagnóstico</h2>
            <p>
                Los resultados obtenidos no representan un diagnóstico clínico ni deben interpretarse como tal. Cualquier decisión relacionada con la salud mental debe tomarse con el acompañamiento de un profesional calificado.
            </p>

            <h2>3. Responsabilidad del usuario</h2>
            <p>
                El usuario es responsable del uso que haga de la información presentada. La plataforma no se hace responsable por interpretaciones erróneas, decisiones personales o consecuencias derivadas del uso de los resultados.
            </p>

            <h2>4. Limitación de responsabilidad</h2>
            <p>
                Los desarrolladores y responsables de esta plataforma no garantizan exactitud absoluta, continuidad del servicio ni resultados específicos derivados de su uso.
            </p>

            <h2>5. Modificaciones</h2>
            <p>
                Los contenidos y condiciones pueden actualizarse en cualquier momento para mejorar la calidad, precisión o cumplimiento normativo del servicio.
            </p>

            <h2>6. Contacto</h2>
            <p>
                Para cualquier consulta sobre este aviso legal, puede contactarnos en: <a href="mailto:legal@mentalhealthcheck.org" className="text-primary-600 hover:underline">legal@mentalhealthcheck.org</a>
            </p>
        </LegalLayout>
    );
}