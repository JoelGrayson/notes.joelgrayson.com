'use client';

import { useState, useRef, useEffect } from "react";
import { ImageWithHotspots, type HotspotCircle } from "./ImageWithHotspots";

export function FP({ name }: { name: string }) {
    return <img src={`/media/probability/fp/${name}.jpg`} alt="" />;
}

export function Notes({ name }: { name: string }) {
    return <img src={`/media/probability/notes/${name}.jpg`} alt="" />;
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
        <p>Click on any <D/> for a derivation.</p>

        {/* Floating window with derivation */}
        {selectedDerivation && (
            <FloatingWindow onClose={() => setSelectedDerivation(null)}>
                {selectedDerivation}
            </FloatingWindow>
        )}

        <ImageWithHotspots
            src="/media/probability/reference-sheet/1.jpg"
            alt="Reference sheet 1"
            circles={[
                { x: 47, y: 52, onClick: () => setSelectedDerivation(<FP name="binomial" />) },
                { x: 60, y: 21, onClick: () => setSelectedDerivation(<FP name="Geo" />) },
                { x: 88, y: 24, onClick: () => setSelectedDerivation(<FP name="NegBin" />) },
                { x: 30, y: 19, onClick: () => setSelectedDerivation(<FP name="E-ber" />) },
                { x: 30, y: 41, onClick: () => setSelectedDerivation(<FP name="E-bin" />) },
                { x: 39, y: 22.5, onClick: () => setSelectedDerivation(<FP name="var-bern" />) },
                { x: 35, y: 69.5, onClick: () => setSelectedDerivation(
                    <>
                        <FP name="poi-1" />
                        <FP name="poi-2" />
                    </>
                ) },
                { x: 89, y: 50, onClick: () => setSelectedDerivation(<FP name="z" />) },
            ]}
        />
        <ImageWithHotspots
            src="/media/probability/reference-sheet/2.jpg"
            alt="Reference sheet 2"
            circles={[
                { x: 78, y: 3, onClick: () => setSelectedDerivation(<><FP name="Bayes" /><FP name="Bayes-2" /></>) },
                { x: 70, y: 81, onClick: () => setSelectedDerivation(<FP name="Chain Rule" />) },
                { x: 86, y: 86, onClick: () => setSelectedDerivation(<FP name="LOTP" />) },
                { x: 65.5, y: 64, onClick: () => setSelectedDerivation(<FP name="Mult" />) },
                { x: 44, y: 45, onClick: () => setSelectedDerivation(<FP name="Beta" />) },
            ]}
        />
        <ImageWithHotspots
            src="/media/probability/reference-sheet/3.jpg"
            alt="Reference sheet 3"
            circles={[
                { x: 72, y: 27, onClick: () => setSelectedDerivation(<FP name="calc-var" />) },
                { x: 72, y: 27, onClick: () => setSelectedDerivation(<FP name="calc-var" />) },
                { x: 97, y: 32, onClick: () => setSelectedDerivation(<FP name="var-aax" />) },
            ]}
        />
        <ImageWithHotspots
            // Convolutions
            src="/media/probability/reference-sheet/4.jpg"
            alt="Reference sheet 4"
            circles={[
                { x: 58, y: 27, onClick: () => setSelectedDerivation(<FP name="conv" />) },
                { x: 80, y: 76, onClick: () => setSelectedDerivation(<FP name="lote" />) },
            ]}
        />
        <ImageWithHotspots
            src="/media/probability/reference-sheet/5.jpg"
            alt="Reference sheet 5"
            circles={[
                { x: 54, y: 26, onClick: () => setSelectedDerivation(<FP name="uncertainty" />) },
                { x: 38, y: 57, onClick: () => setSelectedDerivation(<FP name="Perplexity" />) },
                { x: 32, y: 6, onClick: () => setSelectedDerivation(<FP name="sigmoid" />) },
            ]}
        />
        <ImageWithHotspots
            src="/media/probability/reference-sheet/6.jpg"
            alt="Reference sheet 6"
            circles={[
                { x: 60, y: 41+16, onClick: () => setSelectedDerivation(<FP name="MLE" />) },
                { x: 37, y: 57.5+12.5, onClick: () => setSelectedDerivation(<>
                    <FP name="MLE-Ber" />
                    <h3>Way 2 using Y=sum of Xs:</h3>
                    <FP name="MLE-Ber2" />
                </>) },
                { x: 39, y: 51.5+14, onClick: () => setSelectedDerivation(<FP name="MLE-Poi" />) },
                { x: 42, y: 64+10, onClick: () => setSelectedDerivation(<><FP name="MLE-Normal" /><FP name="MLE-Normal-2" /></>) },
                { x: 92, y: 71.5, onClick: () => setSelectedDerivation(<>
                    <FP name="MLE-logreg-1" />
                    <FP name="MLE-logreg-2" />
                    <FP name="MLE-logreg-3" />
                </>) },
            ]}
        />
        {/* MLE-logreg-1, 2, 3 */}
        {/* Sigmoid */}

        <h2>Full Notes</h2>
        <Notes name="IMG_3613" />
        <FP name="dice" />
        <Notes name="IMG_3614" />
        <Notes name="IMG_3616" />
        <Notes name="IMG_3617" />
        <Notes name="IMG_3618" />
        <Notes name="IMG_3619" />
        <Notes name="IMG_3621" />
        <Notes name="IMG_3622" />
        <Notes name="IMG_3625" />
        <Notes name="IMG_3626" />
        <Notes name="IMG_3627" />
        <Notes name="IMG_3628" />
        <Notes name="IMG_3629" />
        <Notes name="IMG_3630" />
        <Notes name="IMG_3631" />
        <Notes name="IMG_3632" />
        <Notes name="IMG_3633" />
        <Notes name="IMG_3634" />

        <p>• Rejection sampling - count up the number of samples that satisfy a condition and divide by the number of total samples</p>
        <p>• Procedural fairness - fairness through unawareness</p>
        <p>• Distributive fairness - fairness through awareness</p>
        <p>&emsp;o parity - arrest at the same rates</p>

        <h2>Additional First Principles Derivations</h2>
        <FP name="Independence" />
        <FP name="independence-symmetry-and-complement" />
        <FP name="prior-posterior" />
        <FP name="MLE-Pareto" />
    </>;
}

function D() {
    return <button
        style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: '2px solid #007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            color: '#007bff',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        d
    </button>;
}

