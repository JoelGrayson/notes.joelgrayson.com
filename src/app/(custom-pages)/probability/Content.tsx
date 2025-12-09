'use client';

import { useState, useRef, useEffect } from "react";
import { ImageWithHotspots, type HotspotCircle } from "./ImageWithHotspots";

export function FP({ name }: { name: string }) {
    return <img src={`/media/probability/fp/${name}.jpg`} alt="" />;
}

function FloatingWindow({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const windowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Center the window in the viewport when it first appears
        const updatePosition = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            setPosition({
                x: windowWidth * 0.1, // 10% from left
                y: scrollY + windowHeight * 0.1 // 10% from top of viewport
            });
        };

        updatePosition();
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('.close-button')) return;

        setIsDragging(true);
        setDragOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) {
                setPosition({
                    x: e.clientX - dragOffset.x,
                    y: e.clientY - dragOffset.y
                });
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragOffset]);

    return (
        <div
            ref={windowRef}
            onMouseDown={handleMouseDown}
            style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '80vw',
                maxHeight: '90vh',
                maxWidth: '1200px',
                backgroundColor: 'white',
                border: '2px solid #333',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                zIndex: 1000,
                cursor: isDragging ? 'grabbing' : 'grab',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{
                padding: '10px 15px',
                borderBottom: '1px solid #ddd',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                flexShrink: 0
            }}>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Derivation</h3>
                <button
                    className="close-button"
                    onClick={onClose}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '24px',
                        cursor: 'pointer',
                        padding: '0 8px',
                        lineHeight: '1',
                        color: '#666',
                        fontWeight: 'bold'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#000'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
                >
                    ×
                </button>
            </div>
            <div style={{
                padding: '15px',
                overflowY: 'auto',
                maxHeight: 'calc(90vh - 60px)'
            }}>
                {children}
            </div>
        </div>
    );
}

export default function Content() {
    const [selectedDerivation, setSelectedDerivation] = useState<React.ReactElement | null>(null);

    return <>
        <h1>Summary</h1>
        <p>Here is the summary. You can click on any circles (d) for the derivation</p>

        {/* Floating window with derivation */}
        {selectedDerivation && (
            <FloatingWindow onClose={() => setSelectedDerivation(null)}>
                {selectedDerivation}
            </FloatingWindow>
        )}

        <ImageWithHotspots
            src="/media/probability/reference-sheet/IMG_3608.jpg"
            alt="Reference sheet 3"
            circles={[]}
        />
        <ImageWithHotspots
            src="/media/probability/reference-sheet/IMG_3606.jpg"
            alt="Reference sheet 1"
            circles={[
                { x: 86, y: 82, onClick: () => setSelectedDerivation(<FP name="LOTP" />) },
            ]}
        />
        <ImageWithHotspots
            src="/media/probability/reference-sheet/IMG_3607.jpg"
            alt="Reference sheet 2"
            circles={[]}
        />
        <ImageWithHotspots
            src="/media/probability/reference-sheet/IMG_3609.jpg"
            alt="Reference sheet 4"
            circles={[]}
        />
        <ImageWithHotspots
            src="/media/probability/reference-sheet/IMG_3610.jpg"
            alt="Reference sheet 4"
            circles={[]}
        />
        <ImageWithHotspots
            src="/media/probability/reference-sheet/IMG_3611.jpg"
            alt="Reference sheet 4"
            circles={[]}
        />

        <h2>Full Notes</h2>
        <p>Rejection sampling</p>
    </>;
}


// Rejection sampling - count up the number of samples that satisfy a condition and divide by the number of total samples

// Procedural fairness - fairness through unawareness
// Distributive fairness - fairness through awareness
//     parity - arrest at the same rates

