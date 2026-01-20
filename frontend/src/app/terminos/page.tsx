import { LegalLayout } from '@/components/layout/LegalLayout';

export default function TermsPage() {
    return (
        <LegalLayout
            title="Términos y Condiciones"
            lastUpdated="20 de enero de 2024"
        >
            <h2>1. Aceptación de los términos</h2>
            <p>
                Al acceder y utilizar Mental Health Check, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguna parte, te recomendamos no usar la plataforma.
            </p>

            <h2>2. Uso de la plataforma</h2>
            <p>
                Esta plataforma proporciona evaluaciones de orientación sobre síntomas de ansiedad y depresión, con fines educativos y de concientización. Al utilizarla, el usuario acepta que no reemplaza atención médica profesional.
            </p>

            <h2>3. No diagnóstico</h2>
            <p>
                Los resultados obtenidos no representan un diagnóstico clínico ni deben interpretarse como tal. Cualquier decisión relacionada con la salud mental debe tomarse con el acompañamiento de un profesional calificado.
            </p>

            <h2>4. Responsabilidad del usuario</h2>
            <p>
                El usuario es responsable del uso que haga de la información presentada. La plataforma no se hace responsable por interpretaciones erróneas, decisiones personales o consecuencias derivadas del uso de los resultados.
            </p>

            <h2>5. Limitación de responsabilidad</h2>
            <p>
                Los desarrolladores y responsables de esta plataforma no garantizan exactitud absoluta, continuidad del servicio ni resultados específicos derivados de su uso.
            </p>

            <h2>6. Modificaciones</h2>
            <p>
                Los contenidos y condiciones pueden actualizarse en cualquier momento para mejorar la calidad, precisión o cumplimiento normativo del servicio.
            </p>

            <h2>7. Propiedad intelectual</h2>
            <p>
                Los cuestionarios PHQ-9 y GAD-7 son herramientas validadas científicamente y su uso en esta plataforma es con fines informativos. El diseño, interfaz y contenido adicional son propiedad de Mental Health Check.
            </p>

            <h2>8. Ley aplicable</h2>
            <p>
                Estos términos se rigen por las leyes de España. Cualquier disputa se someterá a la jurisdicción de los tribunales de Madrid.
            </p>
        </LegalLayout>
    );
}