import React from 'react';

export default function Hero() {
  return (
    <section className="hero hero-modern-bg hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Image that covers the whole section */}
      <img
        src="/images/hero_cosmetic_sharp.png"
        alt="Clareador Amazolé Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'right center',
        }}
      />
      {/* Gradient overlay matching the warm tropical vibe while keeping text legible */}
      <div className="hero-gradient" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
      }}></div>

      {/* Animated Shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>

      <div className="container hero-content-grid" style={{ position: 'relative' }}>
        <div className="hero-text animate-fade-in hero-text-content">
          <img src="/images/logo-amazole.png" alt="AmazoLé Logo" className="hero-logo" style={{ mixBlendMode: 'multiply' }} />
          <span className="hero-badge">✨ Chegou o momento de brilhar</span>
          <h1 className="hero-title">
            Conquiste a Pele dos Sonhos: <span className="gradient-text">Lisinha & Sem Manchas!</span>
          </h1>
          <p className="hero-subtitle">
            O poder da Amazônia no <strong>Clareador Amazolé</strong>. Resultados visíveis em poucas semanas para você recuperar sua autoestima e confiança.
          </p>
          <div className="hero-buttons">
            <a href="#offers" className="btn-primary hero-btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              QUERO RESTAURAR MINHA PELE
            </a>
            <a href="#testimonials" className="hero-btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Ver Resultados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
