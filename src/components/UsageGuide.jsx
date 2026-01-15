import React from 'react';

export default function UsageGuide() {
    const steps = [
        { title: "1. Prepare", text: "Lave a área com água e sabonete suave." },
        { title: "2. Aplique", text: "Com a pele úmida, faça movimentos circulares suaves com o esfoliante." },
        { title: "3. Enxágue", text: "Retire todo o produto com água corrente." },
        { title: "4. Hidrate", text: "Finalize com hidratante. Se for de dia, aplique protetor solar." }
    ];

    return (
        <section style={{ padding: '8rem 0', background: '#fff' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div className="glass-panel" style={{ padding: '1rem' }}>
                        <img
                            src="/images/usage-illustration.png"
                            alt="Modo de Uso Amazolé"
                            style={{ width: '100%', borderRadius: '15px' }}
                        />
                    </div>
                </div>

                <div style={{ flex: 1.2, minWidth: '350px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--primary)', lineHeight: '1.2' }}>Modo de Uso do AmazoLé</h2>
                    <p style={{ fontSize: '1.5rem', color: 'var(--accent)', fontWeight: 'bold', marginBottom: '2.5rem' }}>Clareador de Manchas</p>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {steps.map((step, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                                <div style={{
                                    background: 'var(--primary)', color: 'white',
                                    width: '30px', height: '30px', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 'bold', flexShrink: 0
                                }}>{idx + 1}</div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: '#2D3748' }}>{step.title}</h4>
                                    <p style={{ color: '#718096' }}>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: '#FFF5F5', borderLeft: '4px solid #E53E3E', borderRadius: '4px' }}>
                        <p style={{ color: '#C53030', fontWeight: 'bold', fontSize: '0.9rem' }}>
                            ⚠️ ATENÇÃO: RECOMENDAMOS PASSAR NO LOCAL A SER TRATADO ATÉ 4 VEZES POR SEMANA. COM A PELE ÚMIDA, DEIXAR O PRODUTO AGIR 5 MINUTOS E REMOVER COM ÁGUA CORRENTE.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
