'use client';

import { useState, ReactNode } from 'react';

export default function Deriv({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <span className="inline">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center !px-1 !py-0.5 text-xs font-medium bg-blue-100 rounded-full hover:bg-blue-200 cursor-pointer border-none ml-1"
                title="Show derivation"
            >
                derivation
            </button>

            {isOpen && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-2 rounded-r">
                    <div className="text-sm font-semibold text-blue-700 mb-2">Derivation</div>
                    <div>{children}</div>
                </div>
            )}
        </span>
    );
}
