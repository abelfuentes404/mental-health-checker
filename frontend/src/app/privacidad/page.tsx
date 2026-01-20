import { LegalLayout } from '@/components/layout/LegalLayout';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <LegalLayout
            title="Política de Privacidad"
            lastUpdated="20 de enero de 2024"
        >
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <div className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                        <h3 className="text-lg font-semibold text-blue-800">Tu privacidad es importante</h3>
                        <p className="text-blue-700">
                            Esta plataforma no recopila datos personales identificables de forma obligatoria. Las respuestas a los tests se procesan de manera local o anónima.
                        </p>
                    </div>
                </div>
            </div>

            <h2>1. Datos recopilados</h2>
            <p>
                Esta plataforma no recopila datos personales identificables de forma obligatoria. Las respuestas a los tests se procesan de manera local o anónima, según la implementación técnica.
            </p>

            <h2>2. Uso de la información</h2>
            <p>
                La información ingresada se utiliza únicamente para:
            </p>
            <ul>
                <li>Calcular resultados del test</li>
                <li>Mostrar orientación personalizada</li>
                <li>(Opcional) Generar estadísticas anónimas para fines de mejora del sistema</li>
            </ul>

            <h2>3. Almacenamiento</h2>
            <p>
                No se almacenan historiales clínicos ni información sensible sin consentimiento explícito del usuario.
            </p>

            <h2>4. Seguridad</h2>
            <p>
                Se implementan medidas técnicas razonables para proteger la información y evitar accesos no autorizados.
            </p>

            <h2>5. Derechos del usuario</h2>
            <p>El usuario puede:</p>
            <ul>
                <li>Utilizar la plataforma sin registrarse</li>
                <li>Abandonar el test en cualquier momento</li>
                <li>Solicitar información sobre el manejo de datos si aplica</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
                Esta plataforma utiliza cookies técnicas necesarias para el funcionamiento básico. No utilizamos cookies de seguimiento o publicidad.
            </p>

            <h2>7. Cambios en la política de privacidad</h2>
            <p>
                Cualquier cambio en esta política se comunicará a través de la plataforma. Se recomienda revisar periódicamente esta página.
            </p>

            <h2>8. Contacto</h2>
            <p>
                Para ejercer tus derechos o consultas sobre privacidad, contacta a: <a href="mailto:privacidad@mentalhealthcheck.org" className="text-primary-600 hover:underline">privacidad@mentalhealthcheck.org</a>
            </p>
        </LegalLayout>
    );
}