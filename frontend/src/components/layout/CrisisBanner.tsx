'use client';

import { AlertTriangle, Phone } from 'lucide-react';
import { useState } from 'react';

export function CrisisBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                        <div>
                            <p className="font-medium">¿Estás en crisis o tienes pensamientos suicidas?</p>
                            <p className="text-sm opacity-90">
                                Llama al <strong>024</strong> (España) o <strong>911</strong> (México) - Atención 24/7
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="tel:024"
                            className="flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            Llamar al 024
                        </a>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="text-white/80 hover:text-white"
                            aria-label="Cerrar aviso"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}