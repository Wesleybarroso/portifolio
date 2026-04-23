import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Dice3D from "../components/Dice3D";

// --- Animações ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- Estilização ---
const Section = styled.section`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 20px; 
  width: 100%;             // Força a largura correta
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
  box-sizing: border-box;  // Essencial para não estourar padding

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 20px;
    overflow-x: hidden;    // Mata qualquer tentativa de rolagem lateral
  }
`;

const Left = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  width: 100%;             // Garante que o container use o espaço disponível
  box-sizing: border-box;
`;

const Tag = styled(motion.p)`
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: 700;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  
  /* A MÁGICA PARA NÃO QUEBRAR */
  white-space: nowrap; 
  
  /* Ajuste para mobile: se ficar muito grande, reduzimos um pouco a fonte mínima */
  @media (max-width: 900px) {
    font-size: clamp(1.8rem, 6vw, 3rem); 
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin-bottom: 24px;
`;

const Description = styled(motion.p)`
  font-size: 1.15rem;
  opacity: 0.8;
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 500px;
  word-wrap: break-word; /* Garante que o texto longo não estoure a tela */
  
  @media (max-width: 900px) { margin: 0 auto 40px; }
`;

const Buttons = styled(motion.div)`
  display: flex;
  gap: 20px;
  
  /* Ajuste para telas muito pequenas: empilha os botões */
  @media (max-width: 480px) { 
    flex-direction: column; 
    align-items: center;
  }
  @media (max-width: 900px) { justify-content: center; }
`;

const BtnPrimary = styled.a`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, filter 0.2s;
  cursor: pointer;
  white-space: nowrap; /* Impede que o texto dentro do botão quebre */
  
  &:hover { filter: brightness(1.2); transform: translateY(-2px); }
`;

const BtnOutline = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover { background: ${({ theme }) => theme.primary}; color: white; }
`;

const Right = styled(motion.div)`
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 100%; /* Garante que o container da imagem não estoure a tela */
`;

export default function Home() {
  return (
    <Section id="home">
      <Left variants={containerVariants} initial="hidden" animate="visible">
        <Tag variants={itemVariants}>Olá, eu sou</Tag>
        <Title variants={itemVariants}>Wesley Barroso</Title>
        <Subtitle variants={itemVariants}>Engenheiro de Software & Fullstack</Subtitle>
        <Description variants={itemVariants}>
          Transformo problemas complexos em sistemas escaláveis. Especialista em <strong>automação inteligente</strong>, 
          APIs robustas e infraestrutura conteinerizada com <strong>Docker</strong>. 
          Construo soluções que unem precisão técnica e experiência digital de alto nível.
        </Description>
        <Buttons variants={itemVariants}>
          <BtnPrimary href="#projetos">Ver Projetos</BtnPrimary>
          <BtnOutline href="#contato">Entre em Contato</BtnOutline>
        </Buttons>
      </Left>

      <Right initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <Dice3D />
      </Right>
    </Section>
  );
}