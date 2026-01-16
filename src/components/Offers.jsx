import React from 'react';

export default function Offers() {
    const offers = [
        {
            name: "Kit Inicial",
            time: "30 Dias",
            pots: 1,
            price: "97,00",
            oldPrice: "137,00",
            save: "30%",
            desc: "Para quem quer experimentar.",
            img: "/images/kit-1-final.png",
            link: "https://ev.braip.com/ref?pl=plazlk6m&ck=che9vjep&af=afijpx19ym"
        },
        {
            name: "Kit Intermediário",
            time: "60 Dias",
            pots: 2,
            price: "147,00",
            oldPrice: "167,00",
            save: "25%",
            desc: "O dobro de resultado por menos.",
            img: "/images/kit-2-final.png",
            link: "https://ev.braip.com/ref?pl=pla29ege&ck=che9vjep&af=afijpx19ym"
        },
        {
            name: "Kit Recomendado",
            time: "90 Dias",
            pots: 3,
            price: "197,00",
            oldPrice: "267,00",
            save: "40%",
            best: true,
            desc: "Tratamento completo para o verão.",
            img: "/images/kit-3-final.png",
            link: "https://ev.braip.com/ref?pl=pla69x0l&ck=che9vjep&af=afijpx19ym"
        },
        {
            name: "Kit Definitivo",
            time: "120 Dias",
            pots: 4,
            price: "247,00",
            oldPrice: null, // No promotion
            save: null,
            desc: "O melhor custo-benefício para quem ama.",
            img: "/images/kit-4-final.png",
            link: "https://ev.braip.com/ref?pl=pla4nznp&ck=che9vjep&af=afijpx19ym"
        },
        {
            name: "Kit Super",
            time: "150 Dias",
            pots: 5,
            price: "327,00",
            oldPrice: null,
            save: null,
            desc: "Estoque garantido para o ano todo.",
            img: "/images/kit-5-final.png",
            link: "https://ev.braip.com/ref?pl=pla2qvxz&ck=che9vjep&af=afijpx19ym"
        },
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
                                {offer.oldPrice ? (
                                    <span style={{ fontSize: '1.5rem', color: '#A0AEC0', textDecoration: 'line-through' }}>R$ {offer.oldPrice}</span>
                                ) : (
                                    // Invisible placeholder to keep alignment correct even without old price
                                    <span style={{ fontSize: '1.5rem', color: 'transparent', userSelect: 'none' }}>-</span>
                                )}
                                <div style={{ fontSize: '3.5rem', fontWeight: '800', color: '#2D3748', lineHeight: '1' }}>
                                    <small style={{ fontSize: '1.5rem' }}>R$</small>{offer.price.split(',')[0]}<small style={{ fontSize: '1rem' }}>,{offer.price.split(',')[1]}</small>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', flexGrow: 1, textAlign: 'left', paddingLeft: '1rem' }}>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'green', marginRight: '10px' }}>✔</span> {offer.pots} {offer.pots > 1 ? 'Potes' : 'Pote'} de Clareador Amazolé
                                </li>
                                <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'green', marginRight: '10px' }}>✔</span> Tratamento {offer.time}
                                </li>
                            </ul>

                            <a href={offer.link} className="btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', textDecoration: 'none', textAlign: 'center', display: 'block' }} target={offer.link !== "#" ? "_blank" : "_self"} rel={offer.link !== "#" ? "noopener noreferrer" : ""}>COMPRAR AGORA</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
