interface QuestionCardProps {
    question: {
        id: number;
        question: string;
        description?: string;
    };
    answerOptions: Array<{
        value: number;
        label: string;
    }>;
    selectedAnswer: number;
    onSelect: (value: number) => void;
}

export function QuestionCard({ question, answerOptions, selectedAnswer, onSelect }: QuestionCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mt-8">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{question.question}</h2>
                {question.description && (
                    <p className="text-gray-600 mt-2">{question.description}</p>
                )}
            </div>

            <div className="space-y-4">
                {answerOptions.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => onSelect(option.value)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${selectedAnswer === option.value
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${selectedAnswer === option.value
                                    ? 'border-primary-500 bg-primary-500'
                                    : 'border-gray-300'
                                }`}>
                                {selectedAnswer === option.value && (
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                )}
                            </div>
                            <span className="text-lg font-medium">{option.label}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}