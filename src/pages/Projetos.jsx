import React from "react";
import styled from "styled-components";
// Certifique-se de que a imagem esteja em src/assets/verde-acao-mockup.png
import verdeAcaoMockup from "../assets/verde-acao-mockup.png"; 

// --- Dados do Projeto atualizados com seu stack real ---
const projectData = {
  title: "Projeto Verde Ação",
  description: "Plataforma completa de gestão ambiental. Frontend focado em UI/UX responsiva e Backend integrado para operações de dados.",
  tags: ["React", "JavaScript", "SCSS", "Express", "Vercel"],
  liveUrl: "https://projetoverdeacao-b1n7m7ons-wesleys-projects-c7635016.vercel.app/",
};

// --- Estilos Globais do Componente ---
const Section = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.bg};
  transition: background 0.3s ease;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  letter-spacing: -1px;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
  max-width: 600px; 
  border-radius: 16px;
  overflow: hidden; 
  background: ${({ theme }) => theme.dark ? "rgba(255, 255, 255, 0.03)" : "#ffffff"};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.dark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }
`;

const BrowserHeader = styled.div`
  height: 30px;
  background: ${({ theme }) => theme.dark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.dark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
`;

const BrowserDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
  opacity: 0.8;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background: ${({ theme }) => theme.dark ? "#1a1a1a" : "#f0f0f0"};
  
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

const CardBody = styled.div`
  padding: 30px;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 12px;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.7;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.primary}22;
  color: ${({ theme }) => theme.primary};
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ViewLink = styled.a`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.2s;

  &:hover {
    gap: 12px;
    text-decoration: underline;
  }
`;

export default function Projetos() {
  return (
    <Section id="projetos">
      <Title>Projeto em Destaque</Title>
      <ProjectContainer>
          <Card>
            <BrowserHeader>
              <BrowserDot color="#FF5F56" />
              <BrowserDot color="#FFBD2E" />
              <BrowserDot color="#27C93F" />
            </BrowserHeader>
            
            <ImageContainer>
                <img 
                    src={verdeAcaoMockup} 
                    alt={`Mockup visual do projeto ${projectData.title}`}
                />
            </ImageContainer>

            <CardBody>
              <CardTitle>{projectData.title}</CardTitle>
              <CardDesc>{projectData.description}</CardDesc>
              
              <TagsContainer>
                {projectData.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsContainer>

              <ViewLink href={projectData.liveUrl} target="_blank" rel="noopener noreferrer">
                Visitar Projeto Real →
              </ViewLink>
            </CardBody>
          </Card>
      </ProjectContainer>
    </Section>
  );
}