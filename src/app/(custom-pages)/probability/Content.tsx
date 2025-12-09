'use client';

import { useState } from "react";
import { ImageWithHotspots, type HotspotCircle } from "./ImageWithHotspots";

export function FP({ name }: { name: string }) {
    return <img src={`/media/probability/fp/${name}.jpg`} alt="" />;
}

export default function Content() {
    const [selectedDerivation, setSelectedDerivation] = useState<React.ReactElement | null>(null);

    return <>
        <h1>Summary</h1>
        <p>Here is the summary. You can click on any circles (d) for the derivation</p>

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

        {selectedDerivation && (
            <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                <h3>Derivation</h3>
                <p>{selectedDerivation}</p>
                <button onClick={() => setSelectedDerivation(null)} style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}>
                    Close
                </button>
            </div>
        )}

        <h2>Full Notes</h2>
        <p>Rejection sampling</p>
    </>;
}


// Rejection sampling - count up the number of samples that satisfy a condition and divide by the number of total samples

// Procedural fairness - fairness through unawareness
// Distributive fairness - fairness through awareness
//     parity - arrest at the same rates

