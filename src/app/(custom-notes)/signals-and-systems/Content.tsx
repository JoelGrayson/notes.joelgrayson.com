'use client';

import { useState } from "react";
import { ImageWithHotspots, type HotspotCircle } from "./components/ImageWithHotspots";
import { FloatingWindow } from "./components/FloatingWindow";
import D from "./components/D";
import { FP, Notes } from "./components/Images";

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
                { x: 86, y: 86, onClick: () => setSelectedDerivation(<FP name="lotp" />) },
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
                { x: 74, y: 65, onClick: () => setSelectedDerivation(<FP name="population-variance" />) },
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

