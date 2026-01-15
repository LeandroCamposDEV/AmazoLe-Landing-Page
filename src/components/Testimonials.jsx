import React from 'react';

export default function Testimonials() {
    const proofs = [
        { img: "/images/proof-before-after.jpg", alt: "Antes e Depois Manchas" },
        { img: "/images/proof-marcia.jpg", alt: "Depoimento Marcia" },
        { img: "/images/proof-solange.jpg", alt: "Depoimento Solange" },
        { img: "/images/proof-julia.jpg", alt: "Depoimento Julia" },
        { img: "/images/proof-madalena.jpg", alt: "Cliente com Produto" },
        { img: "/images/proof-axila-1.jpg", alt: "Antes e Depois Axila" },
        { img: "/images/proof-axila-2.png", alt: "Antes e Depois Axila 2" },
    ];

    return (
        <section id="testimonials" style={{ padding: '8rem 0', background: 'linear-gradient(to bottom, #ffffff, #f0fdf4)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: '#DEF7EC', color: '#276749', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        💚 RESULTADOS REAIS
                    </div>
                    <h2 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '1rem' }}>Quem Usou, Amou e Recomenda!</h2>
                    <p style={{ color: '#4A5568', fontSize: '1.2rem' }}>Veja o que nossas clientes estão dizendo no grupo VIP.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    alignItems: 'start'
                }}>
                    {proofs.map((item, idx) => (
                        <div key={idx} className="glass-panel" style={{
                            padding: '1rem',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'scale(1.03)';
                                e.currentTarget.style.zIndex = '10';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.zIndex = '1';
                            }}
                        >
                            <img
                                src={item.img}
                                alt={item.alt}
                                style={{ width: '100%', borderRadius: '15px', display: 'block' }}
                            />
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ fontStyle: 'italic', color: '#718096', marginBottom: '2rem' }}>Junte-se a mais de 15.000 mulheres que recuperaram a autoestima.</p>
                    <a href="#offers" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                        QUERO TER ESSES RESULTADOS
                    </a>
                </div>
            </div>
        </section>
    );
}
