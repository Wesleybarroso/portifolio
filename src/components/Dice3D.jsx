import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// --- Animações da Fumaça Subindo (Vapor Orgânico) ---
const rise1 = keyframes`
  0% { transform: translate(-50%, 0px) scale(0.5); opacity: 0; }
  20% { opacity: 0.6; }
  100% { transform: translate(-80%, -250px) scale(2.5); opacity: 0; }
`;

const rise2 = keyframes`
  0% { transform: translate(-50%, 0px) scale(0.5); opacity: 0; }
  20% { opacity: 0.5; }
  100% { transform: translate(-20%, -280px) scale(3); opacity: 0; }
`;

const rise3 = keyframes`
  0% { transform: translate(-50%, 0px) scale(0.5); opacity: 0; }
  20% { opacity: 0.7; }
  100% { transform: translate(-50%, -230px) scale(2); opacity: 0; }
`;

const pulseNucleus = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; text-shadow: 0 0 10px rgba(216, 180, 226, 0.4); }
  50% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; text-shadow: 0 0 25px rgba(216, 180, 226, 1); }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; text-shadow: 0 0 10px rgba(216, 180, 226, 0.4); }
`;

// --- Componentes Estilizados ---
const Container = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

// Sistema de Fumaça (Partículas subindo)
const SmokeParticle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(216, 180, 226, 0.35) 0%, rgba(108, 99, 255, 0.1) 40%, transparent 70%);
  border-radius: 50%;
  filter: blur(25px);
  pointer-events: none;
  z-index: 1;
  
  animation: ${(props) => props.$animation} 6s infinite ease-in;
  animation-delay: ${(props) => props.$delay}s;
`;

// Núcleo Central
const Nucleus = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  pointer-events: none;
  color: #d8b4e2;
  animation: ${pulseNucleus} 3s infinite ease-in-out;
`;

// Cena 3D e Cubo Interativo
const Scene3D = styled.div`
  width: 150px;
  height: 150px;
  perspective: 1200px;
  z-index: 3;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: ${(props) => (props.$isDragging ? "none" : "transform 0.1s linear")};
`;

const Face = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 16px;
  transform: ${(props) => props.$transform};
  user-select: none;
  backdrop-filter: blur(6px);
  
  /* Vidro Fumê Escuro Fixo */
  background: rgba(21, 0, 41, 0.4);
  border: 1px solid rgba(216, 180, 226, 0.3);
  box-shadow: inset 0 0 30px rgba(108, 99, 255, 0.2);
`;

const IconLabel = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
`;

// --- Dados das Faces (Ícones) ---
const facesData = [
  {
    label: "React",
    transform: "rotateY(0deg) translateZ(75px)",
    svg: (
      <svg viewBox="0 0 128 128" width="45" height="45">
        <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
        <g fill="none" stroke="#61DAFB" strokeWidth="5.5">
          <ellipse cx="64" cy="64" rx="54" ry="21"/><ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(120 64 64)"/>
        </g>
      </svg>
    )
  },
  {
    label: "Node.js",
    transform: "rotateY(180deg) translateZ(75px)",
    svg: (
      <svg viewBox="0 0 128 128" width="40" height="40">
        <path fill="#83CD29" d="M64 4L10 36v64l54 32 54-32V36z"/><path fill="#404137" d="M64 4L10 36l54 32 54-32z"/><path fill="#fff" d="M56 88V56L38 46v32z"/><path fill="#83CD29" d="M72 88l18-10V46L72 56z"/><path fill="#fff" d="M56 56l8-4 8 4-8 5z"/>
      </svg>
    )
  },
  {
    label: "TypeScript",
    transform: "rotateY(90deg) translateZ(75px)",
    svg: (
      <svg viewBox="0 0 128 128" width="40" height="40">
        <rect width="128" height="128" rx="8" fill="#3178C6"/><text x="14" y="112" fontSize="76" fontWeight="bold" fontFamily="Arial" fill="#fff">TS</text>
      </svg>
    )
  },
  {
    label: "Docker",
    transform: "rotateY(-90deg) translateZ(75px)",
    svg: (
      <svg viewBox="0 0 128 128" width="45" height="45">
        <path fill="#2496ED" d="M116 54c-2-2-7-3-12-2-1-5-4-9-9-13l-3-2-2 3c-3 4-3 10-1 15 1 3 3 6 6 8-3 2-9 3-17 3H8l-1 2C6 71 6 81 11 89l2 3 4-1c13-1 23-6 30-13 6 0 13-1 18-2 6-1 11-4 15-8 6 2 13 2 18 0 2-1 4-2 5-4l1-2-1-2c0-2-1-6-3-8z"/><rect x="14" y="50" width="12" height="12" rx="1" fill="#2496ED"/><rect x="30" y="50" width="12" height="12" rx="1" fill="#2496ED"/><rect x="46" y="50" width="12" height="12" rx="1" fill="#2496ED"/><rect x="62" y="50" width="12" height="12" rx="1" fill="#2496ED"/><rect x="22" y="38" width="12" height="12" rx="1" fill="#2496ED"/><rect x="38" y="38" width="12" height="12" rx="1" fill="#2496ED"/><rect x="54" y="38" width="12" height="12" rx="1" fill="#2496ED"/><rect x="38" y="26" width="12" height="12" rx="1" fill="#2496ED"/>
      </svg>
    )
  },
  {
    label: "MongoDB",
    transform: "rotateX(90deg) translateZ(75px)",
    svg: (
      <svg viewBox="0 0 128 128" width="40" height="40">
        <path fill="#4DB33D" d="M64 10c-2 20-9 27-15 38-9 15-11 31-6 46 3 11 11 20 21 24l1-5c-9-5-15-15-16-26-2-16 5-29 11-40 4-8 7-16 7-22z"/><path fill="#3FA037" d="M64 10c2 20 9 27 15 38 9 15 11 31 6 46-3 11-11 20-21 24l-1-5c9-5 15-15 16-26 2-16-5-29-11-40-4-8-7-16-7-22z"/><circle cx="64" cy="122" r="5" fill="#4DB33D"/>
      </svg>
    )
  },
  {
    label: "JavaScript",
    transform: "rotateX(-90deg) translateZ(75px)",
    svg: (
      <svg viewBox="0 0 128 128" width="40" height="40">
        <rect width="128" height="128" rx="8" fill="#F7DF1E"/><text x="16" y="112" fontSize="76" fontWeight="bold" fontFamily="Arial" fill="#000">JS</text>
      </svg>
    )
  }
];

// Array de partículas de fumaça subindo
const smokeStream = [
  { id: 1, delay: 0, anim: rise1 },
  { id: 2, delay: 1.5, anim: rise2 },
  { id: 3, delay: 3, anim: rise3 },
  { id: 4, delay: 4.5, anim: rise1 },
];

// --- Componente Principal ---
export default function HeroVisual() {
  const [rotation, setRotation] = useState({ x: -20, y: -45 });
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  // Auto-rotação contínua
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      if (!isHovered && !isDragging) {
        setRotation((prev) => ({
          x: prev.x + 0.25, 
          y: prev.y + 0.35, 
        }));
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  // Lógica de Mouse Drag (Arrastar)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.current.x;
    const deltaY = e.clientY - previousMousePosition.current.y;
    setRotation((prev) => ({
      x: prev.x - deltaY * 0.6, 
      y: prev.y + deltaX * 0.6,
    }));
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsDragging(false); }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={(e) => handleMouseDown(e.touches[0])}
      onTouchMove={(e) => handleMouseMove(e.touches[0])}
      onTouchEnd={handleMouseUp}
    >
      {/* Fumaça Mística Subindo */}
      {smokeStream.map((smoke) => (
        <SmokeParticle 
          key={smoke.id} 
          $delay={smoke.delay} 
          $animation={smoke.anim} 
        />
      ))}

      {/* Núcleo Central Parado e Pulsando */}
      <Nucleus>{"< / >"}</Nucleus>

      {/* Cubo 3D de Vidro Fumê */}
      <Scene3D>
        <Cube
          $isDragging={isDragging}
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
          {facesData.map((face, index) => (
            <Face key={index} $transform={face.transform}>
              {face.svg}
              <IconLabel>{face.label}</IconLabel>
            </Face>
          ))}
        </Cube>
      </Scene3D>
    </Container>
  );
}