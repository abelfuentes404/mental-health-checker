'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/test/ProgressBar';
import { QuestionCard } from '@/components/test/QuestionCard';
import { DisclaimerModal } from '@/components/test/DisclaimerModal';
import { calculatePHQ9Score, getPHQ9Interpretation } from '@/lib/phq9';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

// Preguntas del PHQ-9 en español
const PHQ9_QUESTIONS = [
    {
        id: 1,
        question: "Poco interés o placer en hacer cosas",
        description: "Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado este problema?"
    },
    {
        id: 2,
        question: "Se ha sentido decaído(a), deprimido(a) o sin esperanzas",
        description: "Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado este problema?"
    },
    {
        id: 3,
        question: "Ha tenido dificultad para quedarse o permanecer dormido(a), o ha dormido demasiado",
        description: "Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado este problema?"
    },
    {
        id: 4,
        question: "Se ha sentido cansado(a) o con poca energía",
        description: "Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado este problema?"
    },
    {
        id: 5,
        question: "Sin apetito o ha comido en exceso",
        description: "Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado este problema?"
    },
    {
        id: 6,
        question: "Se ha sentido mal consigo mismo(a) - o que es un fracaso o que ha quedado mal consigo mismo(a) o con su familia",
        description: "Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado este problema?"
    },
    {
        id: 7,
        question: "Ha tenido dificultad para concentrarse en cosas, tales como leer el periódico o ver la televisión",
        description: "Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado este problema?"
    },
    {
        id: 8,
        question: "¿Se ha movido o hablado tan lento que otras personas podrían haberlo notado? o lo contrario - muy inquieto(a) o agitado(a) que ha estado moviéndose mucho más de lo normal",
        description: "Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado este problema?"
    },
    {
        id: 9,
        question: "Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera",
        description: "Durante las últimas 2 semanas, ¿con qué frecuencia le ha molestado este problema?"
    }
];

// Opciones de respuesta para PHQ-9
const ANSWER_OPTIONS = [
    { value: 0, label: "Nunca" },
    { value: 1, label: "Varios días" },
    { value: 2, label: "Más de la mitad de los días" },
    { value: 3, label: "Casi todos los días" }
];

export default function DepressionTestPage() {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<number[]>(Array(PHQ9_QUESTIONS.length).fill(-1));
    const [showDisclaimer, setShowDisclaimer] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleAnswer = (value: number) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = value;
        setAnswers(newAnswers);
    };

    const nextQuestion = () => {
        if (currentQuestion < PHQ9_QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = () => {
        if (answers.includes(-1)) {
            alert("Por favor, responde todas las preguntas antes de continuar.");
            return;
        }

        setIsSubmitting(true);

        // Calcular puntuación
        const score = calculatePHQ9Score(answers);
        const interpretation = getPHQ9Interpretation(score);

        // Guardar resultados en sessionStorage para mostrar en la página de resultados
        sessionStorage.setItem('phq9_score', score.toString());
        sessionStorage.setItem('phq9_interpretation', JSON.stringify(interpretation));
        sessionStorage.setItem('phq9_answers', JSON.stringify(answers));

        // Redirigir a página de resultados
        router.push('/test/depresion/resultados');
    };

    const handleDisclaimerAccept = () => {
        setShowDisclaimer(false);
    };

    const progress = ((currentQuestion + 1) / PHQ9_QUESTIONS.length) * 100;
    const isLastQuestion = currentQuestion === PHQ9_QUESTIONS.length - 1;

    if (showDisclaimer) {
        return <DisclaimerModal onAccept={handleDisclaimerAccept} testName="PHQ-9 (Depresión)" />;
    }

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            {/* Header */}
            <div className="mb-8">
                <button
                    onClick={() => router.back()}
                    className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Volver
                </button>
                <h1 className="text-3xl font-bold text-gray-900">Test de Depresión (PHQ-9)</h1>
                <p className="text-gray-600 mt-2">
                    Evalúa síntomas depresivos en las últimas 2 semanas
                </p>
            </div>

            {/* Barra de progreso */}
            <ProgressBar progress={progress} />
            <div className="text-sm text-gray-500 text-center mt-2">
                Pregunta {currentQuestion + 1} de {PHQ9_QUESTIONS.length}
            </div>

            {/* Tarjeta de pregunta */}
            <QuestionCard
                question={PHQ9_QUESTIONS[currentQuestion]}
                answerOptions={ANSWER_OPTIONS}
                selectedAnswer={answers[currentQuestion]}
                onSelect={handleAnswer}
            />

            {/* Navegación */}
            <div className="flex justify-between mt-8">
                <Button
                    variant="secondary"
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                >
                    Anterior
                </Button>

                {isLastQuestion ? (
                    <Button
                        variant="primary"
                        onClick={handleSubmit}
                        isLoading={isSubmitting}
                    >
                        Ver Resultados
                    </Button>
                ) : (
                    <Button
                        variant="primary"
                        onClick={nextQuestion}
                        disabled={answers[currentQuestion] === -1}
                    >
                        Siguiente
                    </Button>
                )}
            </div>

            {/* Indicador de respuesta */}
            <div className="mt-4 text-center">
                {answers[currentQuestion] === -1 ? (
                    <p className="text-gray-500">Selecciona una opción para continuar</p>
                ) : (
                    <p className="text-green-600">
                        ✓ Respondido: {ANSWER_OPTIONS.find(opt => opt.value === answers[currentQuestion])?.label}
                    </p>
                )}
            </div>

            {/* Aviso de crisis */}
            <div className="mt-12 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-red-800">¿Estás en crisis?</h3>
                        <p className="text-red-700 text-sm mt-1">
                            Si tienes pensamientos de lastimarte o necesitas hablar con alguien ahora mismo,
                            llama al <a href="tel:024" className="font-bold underline">024</a> (España) o al
                            servicio de emergencias de tu país. Están disponibles 24/7.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}