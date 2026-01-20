interface ProgressBarProps {
    progress: number; // 0 a 100
}

export function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
                className="bg-primary-600 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}