import React from 'react';
import '../ingredients.css';

export default function Differentiators() {
    const ingredients = [
        {
            title: "Mulateiro",
            img: "/images/ing-mulateiro.png",
            desc: "Planta da Amazônia com alto poder cicatrizante e antioxidante, uniformiza o tom da pele."
        },
        {
            title: "Dolomita",
            img: "/images/ing-dolomita.png",
            desc: "Mineral rico em cálcio e magnésio, ajuda na regeneração da pele e clareamento de manchas."
        },
        {
            title: "Óleo de Melaleuca",
            img: "/images/ing-melaleuca.png",
            desc: "Combate bactérias e inflamações, mantendo a pele limpa e saudável."
        },
        {
            title: "Argila Branca",
            img: "/images/ing-white-clay.png",
            desc: "Suaviza a pele, clareia naturalmente e controla a oleosidade sem agredir."
        },
    ];

    return (
        <section style={{ padding: '8rem 0', background: '#F7FAFC' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '2.8rem', color: '#3B2113', textTransform: 'uppercase', letterSpacing: '1px' }}>Fórmula Patenteada e Exclusiva</h2>
                    <div style={{ width: '100px', height: '4px', background: 'var(--accent)', margin: '1rem auto' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem 2rem', marginTop: '2rem' }}>
                    {ingredients.map((item, idx) => (
                        <div key={idx} className="ingredient-card">
                            <div className="ingredient-img-container">
                                <img src={item.img} alt={item.title} className="ingredient-img" />
                            </div>
                            <h3 className="ingredient-title">{item.title}</h3>
                            <p className="ingredient-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Textura Leve & Toque Seco</h3>
                        <p style={{ fontSize: '1.1rem', color: '#4A5568', marginBottom: '1.5rem' }}>
                            Nada de pele pegajosa! O Clareador Amazolé tem absorção rápida e efeito matte, ideal para usar antes da maquiagem ou protetor solar.
                        </p>
                        <ul style={{ listStyle: 'none', color: '#2D3748' }}>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Não obstrui os poros</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Fragrância suave</li>
                            <li style={{ marginBottom: '0.5rem' }}>✅ Hipoalergênico</li>
                        </ul>
                    </div>
                    <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
                        <img src="/images/texture-info.png" alt="Textura do Creme" className="glass-panel" style={{ borderRadius: '20px', maxWidth: '100%' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
