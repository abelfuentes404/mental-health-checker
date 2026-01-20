import { Brain, Heart, Shield, MapPin, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function HomePage() {
  const tests = [
    {
      id: 'phq9',
      title: 'Test de Depresión (PHQ-9)',
      description: 'Evalúa síntomas depresivos en las últimas 2 semanas',
      questions: 9,
      time: '5 min',
      color: 'from-blue-500 to-cyan-500',
      icon: Heart
    },
    {
      id: 'gad7',
      title: 'Test de Ansiedad (GAD-7)',
      description: 'Mide niveles de ansiedad generalizada',
      questions: 7,
      time: '3 min',
      color: 'from-purple-500 to-pink-500',
      icon: Brain
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="text-center pt-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cuida tu <span className="text-primary-600">salud mental</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Realiza una autoevaluación confidencial basada en tests médicos validados
            y encuentra recursos de ayuda profesional cerca de ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" variant="primary">
              <Link href="/test/depresion">
                <Heart className="mr-2 h-5 w-5" />
                Comenzar Test
              </Link>
            </Button>
            <Button asChild size="xl" variant="secondary">
              <Link href="/recursos">
                <MapPin className="mr-2 h-5 w-5" />
                Buscar Ayuda
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Shield className="h-8 w-8 text-yellow-600 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Aviso Importante</h3>
            <p className="text-yellow-700">
              Esta herramienta <strong className="font-bold">NO es un diagnóstico médico</strong>. Es una
              autoevaluación para orientarte. Si estás en crisis, contacta inmediatamente con
              servicios de emergencia. Los resultados son anónimos y confidenciales.
            </p>
          </div>
        </div>
      </section>

      {/* Available Tests */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Tests Disponibles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tests.map((test) => {
            const Icon = test.icon;
            return (
              <div
                key={test.id}
                className={`bg-gradient-to-br ${test.color} rounded-2xl p-8 text-white transform transition-transform hover:scale-[1.02]`}
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon className="h-10 w-10" />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {test.questions} preguntas
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{test.title}</h3>
                <p className="mb-6 opacity-90">{test.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{test.time}</span>
                  </div>
                  <Button asChild variant="ghost" className="text-white border-white/30 hover:bg-white/10">
                    <Link href={`/test/${test.id}`}>
                      Comenzar
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Por qué confiar en nosotros
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Confidencial',
              description: 'Tus respuestas son anónimas. No guardamos datos personales.'
            },
            {
              icon: Users,
              title: 'Basado en Evidencia',
              description: 'Tests validados científicamente (PHQ-9, GAD-7).'
            },
            {
              icon: MapPin,
              title: 'Recursos Reales',
              description: 'Directorio de profesionales y centros verificados.'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}