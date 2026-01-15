import React from 'react';

export default function Offers() {
    const offers = [
        { name: "Kit Inicial", time: "30 Dias", pots: 1, price: "197,00", save: "0%", desc: "Para quem quer experimentar.", img: "/images/kit-1.jpg" },
        { name: "Kit Intermediário", time: "60 Dias", pots: 2, price: "297,00", save: "25%", desc: "O dobro de resultado por menos.", img: "/images/kit-2.png" },
        { name: "Kit Recomendado", time: "90 Dias", pots: 3, price: "397,00", save: "40%", best: true, desc: "Tratamento completo para o verão.", img: "/images/kit-3-v2.png" },
    ];

    return (
        <section id="offers" style={{ padding: '6rem 0', background: 'linear-gradient(to top, #fff, #f0fdf4)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', color: '#1a365d', marginBottom: '1rem' }}>Ofertas Exclusivas de Carnaval</h2>

                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'stretch' }}>
                    {offers.map((offer, idx) => (
                        <div key={idx} className="glass-panel" style={{
                            padding: '3rem 2rem',
                            flex: '1 1 300px',
                            maxWidth: '350px',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            border: offer.best ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.5)',
                            transform: offer.best ? 'scale(1.05)' : 'scale(1)',
                            zIndex: offer.best ? 2 : 1
                        }}>
                            {offer.best && <div style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '50px', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>🔥 Mais Vendido</div>}

                            {offer.img && <img src={offer.img} alt={offer.name} style={{ width: '100%', height: 'auto', marginBottom: '1.5rem', borderRadius: '10px' }} />}

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1A202C' }}>{offer.name}</h3>
                            <p style={{ color: '#718096', marginBottom: '2rem', fontSize: '0.9rem' }}>{offer.desc}</p>

                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{ fontSize: '1.5rem', color: '#A0AEC0', textDecoration: 'line-through' }}>R$ {(parseInt(offer.price) * 1.2).toFixed(0)}</span>
                                <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#2D3748', lineHeight: '1' }}>
                                    <small style={{ fontSize: '1.5rem' }}>R$</small>{offer.price.split(',')[0]}<small style={{ fontSize: '1rem' }}>,{offer.price.split(',')[1]}</small>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', flexGrow: 1, textAlign: 'left', paddingLeft: '1rem' }}>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'green', marginRight: '10px' }}>✔</span> {offer.pots} Pote(s) de Clareador Amazolé
                                </li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'green', marginRight: '10px' }}>✔</span> Tratamento {offer.time}
                                </li>
                            </ul>

                            <button className="btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1rem' }}>COMPRAR AGORA</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
