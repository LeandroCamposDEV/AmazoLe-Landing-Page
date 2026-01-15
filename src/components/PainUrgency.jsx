import React from 'react';

export default function PainUrgency() {
    return (
        <section style={{ padding: '6rem 0', textAlign: 'center', background: 'linear-gradient(to right, #fff, #f7f9fc)' }}>
            <div className="container">
                <h2 style={{ color: '#E53E3E', fontSize: '2.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '2rem', background: '#FFF5F5', padding: '0.5rem', borderRadius: '50%' }}>⚠️</span>
                    Faltam poucas semanas para a folia!
                </h2>
                <p style={{ fontSize: '1.5rem', color: '#4A5568', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', marginBottom: '4rem' }}>
                    Não deixe as manchas de melasma, axilas ou foliculite esconderem a sua beleza.
                    <br />
                    <strong style={{ color: '#2D3748', borderBottom: '3px solid var(--accent)' }}>Recupere sua autoestima agora!</strong>
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[1, 2, 3].map((num) => (
                        <div key={num} className="glass-panel" style={{ padding: '0.5rem', overflow: 'hidden' }}>
                            <video
                                controls
                                style={{ width: '100%', borderRadius: '15px' }}
                            >
                                <source src={`/videos/video-${num}.mp4`} type="video/mp4" />
                                Seu navegador não suporta vídeos.
                            </video>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
