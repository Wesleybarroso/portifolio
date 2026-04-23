import React from "react";
import styled from "styled-components";

// Estilização
const Section = styled.section`
  padding: 100px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  /* fallback caso o tema falhe */
  color: ${({ theme }) => (theme && theme.primary ? theme.primary : "#440A67")};
`;

const Bio = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  /* fallback caso o tema falhe */
  color: ${({ theme }) => (theme && theme.text ? theme.text : "#333")};
  opacity: 0.9;
`;

const Highlight = styled.span`
  color: ${({ theme }) => (theme && theme.primary ? theme.primary : "#440A67")};
  font-weight: 700;
`;

// Componente
export default function Sobre() {
  return (
    <Section id="sobre">
      <Title>Sobre mim</Title>
      <Bio>
        Mais do que escrever linhas de código, meu foco é transformar desafios complexos em soluções digitais que geram valor real. Com uma base técnica sólida em Desenvolvimento de Sistemas e Engenharia de Software, combino o <Highlight>rigor analítico da engenharia com a agilidade</Highlight> necessária para criar aplicações que performam e escalam.
        <br /><br />
        Acredito que um sistema de alta performance exige segurança e arquitetura limpa. Desenvolvo desde APIs funcionais até plataformas de e-commerce, sempre utilizando <Highlight>Docker</Highlight> para garantir robustez.
        <br /><br />
        Meu diferencial é a <Highlight>automação estratégica</Highlight>: crio fluxos inteligentes para WhatsApp e aplicações que eliminam gargalos. Estou pronto para transformar sua ideia em um produto de alta performance.
      </Bio>
    </Section>
  );
}