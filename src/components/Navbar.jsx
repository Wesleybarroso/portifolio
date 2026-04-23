import React, { useState } from "react";
import styled from "styled-components";

// --- Estilos da Navbar ---
const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 15px 0;
  z-index: 1000;
  background: ${({ theme }) => theme.dark ? "rgba(21, 0, 41, 0.9)" : "rgba(255, 255, 255, 0.9)"};
  backdrop-filter: blur(15px);
  border-bottom: 1px solid ${({ theme }) => theme.dark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.dark ? "#FFFFFF" : theme.primary};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
`;

// --- Menu Hamburguer (Ícone) ---
const Hamburger = styled.button`
  display: none; 
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;

  @media (max-width: 768px) {
    display: flex; 
  }

  span {
    width: 30px;
    height: 3px;
    /* Ícone ganha cor de destaque (primary) quando aberto para garantir visibilidade */
    background: ${({ theme, open }) => open ? theme.primary : (theme.dark ? "#FFFFFF" : "#1A0133")};
    border-radius: 10px;
    transition: all 0.3s ease;
    transform-origin: 1px;
    
    &:nth-child(1) { transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'}; }
    &:nth-child(2) { opacity: ${({ open }) => open ? '0' : '1'}; }
    &:nth-child(3) { transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}; }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => open ? "0" : "-100%"};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    
    /* AQUI ESTÁ A MÁGICA DA TRANSPARÊNCIA E DO BLUR */
    background: ${({ theme }) => theme.dark ? "rgba(21, 0, 41, 0.85)" : "rgba(255, 255, 255, 0.9)"};
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px); /* Essencial para o iPhone/Safari */
    
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }
`;

const NavLink = styled.a`
  font-size: 1.2rem; // Aumentado um pouco para facilitar o clique no mobile
  font-weight: 600;
  color: ${({ theme }) => theme.dark ? "#E0E0E0" : theme.text};
  text-decoration: none;
  opacity: 0.9;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover { opacity: 1; color: ${({ theme }) => theme.primary}; }
`;

// --- SWITCH ---
const SwitchLabel = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  height: 30px;
  background: ${({ theme }) => theme.dark ? "#2D0548" : "#E4E6EB"};
  border-radius: 50px;
  cursor: pointer;
  padding: 5px;
  margin-top: 20px; /* Espaço extra no mobile */
  transition: background 0.3s ease;
`;

const SwitchInput = styled.input` display: none; `;

const SwitchBall = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transform: ${({ checked }) => checked ? "translateX(30px)" : "translateX(0)"};
  background-color: ${({ checked }) => checked ? "#f1c40f" : "#fff"};
`;

export default function Navbar({ toggle, dark }) {
  const [open, setOpen] = useState(false);

  return (
    <NavContainer>
      <NavContent>
        <Logo href="/">Wesley.dev</Logo>
        
        <Hamburger open={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Hamburger>
        
        <NavLinks open={open}>
          <NavLink href="#home" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink href="#sobre" onClick={() => setOpen(false)}>Sobre</NavLink>
          <NavLink href="#projetos" onClick={() => setOpen(false)}>Projetos</NavLink>
          <NavLink href="#skills" onClick={() => setOpen(false)}>Skills</NavLink>
          <NavLink href="#contato" onClick={() => setOpen(false)}>Contato</NavLink>
          
          <SwitchLabel>
            <SwitchInput type="checkbox" checked={dark} onChange={toggle} />
            <span style={{ fontSize: '12px' }}>☀️</span>
            <span style={{ fontSize: '12px' }}>🌙</span>
            <SwitchBall checked={dark} />
          </SwitchLabel>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
}