import React from "react";
import styled from "styled-components";

// --- Dados dos contatos (Discord removido) ---
const socialData = [
  { 
    name: "GitHub", 
    url: "https://github.com/Wesleybarroso", 
    svg: <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.115 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> 
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/wesleybleite", 
    svg: <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg> 
  },
  { 
    name: "Instagram", 
    url: "https://www.instagram.com/wesley.lte", 
    svg: <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.173.056 1.954.264 2.49.47.63.243 1.077.534 1.549 1.006.472.472.763.919 1.006 1.549.206.536.414 1.317.47 2.49.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.173-.264 1.954-.47 2.49-.243.63-.534 1.077-1.006 1.549-.472.472-.919.763-1.549 1.006-.536.206-1.317.414-2.49.47-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.173-.056-1.954-.264-2.49-.47-.63-.243-1.077-.534-1.549-1.006-.472-.472-.763-.919-1.006-1.549-.206-.536-.414-1.317-.47-2.49-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.173.264-1.954.47-2.49.243-.63.534-1.077 1.006-1.549.472-.472.919-.763 1.549-1.006.536-.206 1.317-.414 2.49-.47 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.277.058-2.15.257-2.916.556-.787.305-1.453.714-2.119 1.381-.667.666-1.076 1.332-1.381 2.119-.299.766-.498 1.639-.556 2.916-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.277.257 2.15.556 2.916.305.787.714 1.453 1.381 2.119.666.667 1.332 1.076 2.119 1.381.766.299 1.639.498 2.916.556 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.058 2.15-.257 2.916-.556.787-.305 1.453-.714 2.119-1.381.667-.666 1.076-1.332 1.381-2.119.299-.766.498-1.639.556-2.916.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.277-.257-2.15-.556-2.916-.305-.787-.714-1.453-1.381-2.119-.666-.667-1.332-1.076-2.119-1.381-.766-.299-1.639-.498-2.916-.556C15.667.014 15.259 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg> 
  }
];

const Container = styled.section`
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
`;

const Card = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 40px;
  border-radius: 24px;
  text-align: center;
  
  /* Sem borda branca */
  border: none;
  background: ${({ theme }) => theme.dark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"};
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  font-size: 1rem;
  opacity: 0.7;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const EmailLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin-bottom: 20px;
  display: block;
  transition: color 0.3s;
  &:hover { color: ${({ theme }) => theme.primary}; }
`;

const WhatsAppBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  padding: 12px 28px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  transition: transform 0.2s;
  &:hover { transform: translateY(-2px); }
`;

const SocialGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({ theme }) => theme.dark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
  transition: all 0.3s;
  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.text};
  }
  &:hover { 
    background: ${({ theme }) => theme.primary}; 
    transform: translateY(-5px);
    svg { fill: #ffffff; }
  }
`;

export default function Contato() {
  return (
    <Container id="contato">
      <Card>
        <Title>Vamos conversar?</Title>
        <Description>Estou aberto a novos projetos, automações inteligentes e parcerias estratégicas.</Description>
        
        <EmailLink href="mailto:contato@wesleybarroso.com">contato@wesleybarroso.com</EmailLink>

        <WhatsAppBtn href="https://wa.me/5591993087692" target="_blank" rel="noopener noreferrer">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.591 5.52 0 10.02-4.5 10.02-10.02 0-5.52-4.5-10.02-10.02-10.02-5.52 0-10.02 4.5-10.02 10.02 0 1.956.566 3.803 1.582 5.43l-.707 2.585 2.735-.716z"/></svg>
          Chamar no WhatsApp
        </WhatsAppBtn>

        <SocialGrid>
          {socialData.map((social) => (
            <SocialLink key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
              {social.svg}
            </SocialLink>
          ))}
        </SocialGrid>
      </Card>
    </Container>
  );
}