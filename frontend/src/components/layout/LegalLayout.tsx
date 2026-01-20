import { ReactNode } from 'react';

interface LegalLayoutProps {
    children: ReactNode;
    title: string;
    lastUpdated?: string;
}

export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h1>
            {lastUpdated && (
                <p className="text-gray-500 mb-8">Última actualización: {lastUpdated}</p>
            )}
            <div className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 max-w-none">
                {children}
            </div>
        </div>
    );
}