import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./theme"; // Certifique-se de que este arquivo existe

// 1. ESTILOS GLOBAIS (O "mata-listra" e reset de CSS)
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    /* ESSAS DUAS LINHAS SÃO A CHAVE PARA O SEU PROBLEMA */
    overflow-x: hidden; 
    position: relative;
  }

  body {
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
    font-family: 'Inter', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

// 2. CONTAINER PRINCIPAL (Garante altura total)
const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// 3. COMPONENTES IMPORTADOS
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Skills from "./pages/Skills";
import Contato from "./pages/Contato";

function App() {
  const [dark, setDark] = useState(true);
  const currentTheme = dark ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle /> {/* Aplica o reset de CSS e a cor de fundo */}
      <MainContainer>
        <Navbar toggle={() => setDark(!dark)} dark={dark} />
        <Home />
        <Sobre />
        <Projetos />
        {/* Passamos o 'dark' para o Skills para que ele saiba qual cor aplicar */}
        <Skills dark={dark} />
        <Contato />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;