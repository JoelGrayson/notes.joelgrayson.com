'use client';

export type HotspotCircle = {
    x: number; // percentage from left (0-100)
    y: number; // percentage from top (0-100)
    onClick: () => void;
};

export function ImageWithHotspots({ src, alt, circles }: { src: string; alt: string; circles: HotspotCircle[] }) {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={src} alt={alt} style={{ display: 'block', width: '100%' }} />
            {circles.map((circle, index) => (
                <button
                    key={index}
                    onClick={circle.onClick}
                    style={{
                        position: 'absolute',
                        left: `${circle.x}%`,
                        top: `${circle.y}%`,
                        transform: 'translate(-50%, -50%)',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        border: '2px solid #007bff',
                        backgroundColor: 'rgba(0, 123, 255, 0.2)',
                        color: '#007bff',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.4)';
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.2)';
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                    }}
                >
                    d
                </button>
            ))}
        </div>
    );
}
