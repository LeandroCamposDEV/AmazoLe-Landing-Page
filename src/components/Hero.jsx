import React from 'react';

export default function Hero() {
  return (
    <section className="hero hero-modern-bg" style={{ padding: '8rem 0', position: 'relative' }}>
      {/* Animated Shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
        <div className="hero-text animate-fade-in">
          <img src="/images/logo-amazole.png" alt="AmazoLé Logo" style={{ width: '220px', marginBottom: '2rem', mixBlendMode: 'multiply' }} />
          <span style={{ background: 'rgba(46, 139, 87, 0.1)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'inline-block' }}>✨ Chegou o momento de brilhar</span>
          <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Chegue no Carnaval com a Pele dos Sonhos: <span className="gradient-text">Lisinha & Sem Manchas!</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: '#4A5568', lineHeight: '1.8' }}>
            O poder da Amazônia no <strong>Clareador Amazolé</strong>. Resultados visíveis em poucas semanas para você usar seu abadá sem medo.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#offers" className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', height: 'fit-content', padding: '1rem 2rem', justifyContent: 'center', whiteSpace: 'nowrap' }}>
              QUERO RESTAURAR MINHA PELE
            </a>
            <a href="#testimonials" style={{ padding: '1rem 2rem', border: '2px solid #E2E8F0', borderRadius: '50px', background: 'transparent', fontWeight: 'bold', color: '#4A5568', cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center', height: 'fit-content', whiteSpace: 'nowrap' }}>
              Ver Resultados
            </a>
          </div>
        </div>

        <div className="hero-image animate-float" style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 1 }}>
          {/* Badge Floating */}
          <div style={{ position: 'absolute', top: '0', right: '0', background: 'var(--accent)', color: '#fff', padding: '1.5rem', borderRadius: '50%', fontWeight: '900', boxShadow: '0 10px 20px rgba(212,175,55,0.3)', zIndex: 10, textAlign: 'center', lineHeight: '1.2' }}>
            Promoção<br />Carnaval
          </div>
          <img
            src="/images/product-hero-v3.png"
            alt="Cicatridiva Creme Clareador"
            style={{ width: '100%', maxWidth: '650px', mixBlendMode: 'multiply' }}
          />
        </div>
      </div>
    </section>
  );
}
