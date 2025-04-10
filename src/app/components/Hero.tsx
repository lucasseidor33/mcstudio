'use client';
import { useRef } from 'react';

export default function Hero() {
  const nextSectionRef = useRef<HTMLDivElement>(null);



  return (
    <>
      <section
        id="hero"
        className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden text-center"
        aria-labelledby="hero-heading"
      >
        {/* Fondo GIF */}
        <img
          src="/video/herovideo1.gif"
          alt="Animación de fondo mágica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6">
          <h1
            id="hero-heading"
            className="  text-7xl md:text-9xl font-bold tracking-wide leading-tight"
            style={{
                fontFamily: "'Playfair Display', serif",
              letterSpacing: '45px',
              lineHeight: '1.19',
            }}
          >
            Mc Studio
          </h1>

          {/* Descripción estéticamente refinada */}
          <p
            className="mt-10 text-lg md:text-2xl max-w-2xl text-white/80 leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}          >
     Especialistas en perfilado de cejas, cuidado facial y experiencias de estética únicas.
      </p>

          {/* Botón más separado */}
       
        </div>
      </section>

     
    </>
  );
}
