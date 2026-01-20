export function calculatePHQ9Score(answers: number[]): number {
    // Asegurarse de que tenemos 9 respuestas
    const validAnswers = answers.slice(0, 9).filter(answer => answer >= 0);

    // Sumar las respuestas (cada una vale 0-3)
    const totalScore = validAnswers.reduce((sum, answer) => sum + answer, 0);

    return totalScore;
}

export function getPHQ9Interpretation(score: number) {
    if (score >= 0 && score <= 4) {
        return {
            level: 'mínimo',
            severity: 'Depresión mínima o ausente',
            color: 'bg-green-500',
            recommendations: [
                'No se detectan síntomas depresivos significativos.',
                'Mantén hábitos saludables: ejercicio regular, sueño adecuado y alimentación balanceada.',
                'Considera realizar chequeos periódicos de tu estado emocional.'
            ],
            action: 'No se requiere intervención específica. Continúa con el autocuidado.'
        };
    } else if (score >= 5 && score <= 9) {
        return {
            level: 'leve',
            severity: 'Depresión leve',
            color: 'bg-yellow-500',
            recommendations: [
                'Los síntomas sugieren depresión leve. Considera hablar con un profesional de salud mental.',
                'Practica técnicas de manejo del estrés: meditación, mindfulness o ejercicios de respiración.',
                'Mantén una rutina de actividades placenteras y contacto social.'
            ],
            action: 'Seguimiento. Considera consultar con un profesional si los síntomas persisten.'
        };
    } else if (score >= 10 && score <= 14) {
        return {
            level: 'moderado',
            severity: 'Depresión moderada',
            color: 'bg-orange-500',
            recommendations: [
                'Se recomienda evaluación por un profesional de salud mental.',
                'Considera terapia psicológica (como terapia cognitivo-conductual).',
                'Establece una red de apoyo: familiares, amigos o grupos de apoyo.',
                'Evita el aislamiento y mantén comunicación regular con seres queridos.'
            ],
            action: 'Consulta profesional recomendada. Los síntomas pueden interferir con tu funcionamiento diario.'
        };
    } else if (score >= 15 && score <= 19) {
        return {
            level: 'moderadamente severo',
            severity: 'Depresión moderadamente severa',
            color: 'bg-red-500',
            recommendations: [
                'Consulta urgente con un profesional de salud mental.',
                'Considera evaluación para tratamiento farmacológico y psicoterapia.',
                'Evita tomar decisiones importantes mientras los síntomas sean intensos.',
                'Busca apoyo inmediato si tienes pensamientos de autolesión.'
            ],
            action: 'Intervención profesional necesaria. Los síntomas son significativos y requieren atención.'
        };
    } else {
        // 20-27
        return {
            level: 'severo',
            severity: 'Depresión severa',
            color: 'bg-red-700',
            recommendations: [
                'Busca ayuda profesional INMEDIATAMENTE.',
                'Contacta con servicios de urgencias si tienes pensamientos suicidas.',
                'No estás solo/a. Llama a una línea de crisis: 024 (España) o 911 (emergencias).',
                'Informa a familiares o amigos de confianza sobre tu estado.'
            ],
            action: 'Atención urgente requerida. Los síntomas son graves y pueden ser incapacitantes.'
        };
    }
}