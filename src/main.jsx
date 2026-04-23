import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import './styles/_main.scss'  // ← Verifique se essa linha existe!

const theme = {
  primary: '#440A67',
  secondary: '#380858',
  tertiary: '#2D0548',
  dark: '#210339',
  darker: '#150029',
  card: '#2D0548',
  background: '#150029',
  text: '#ffffff',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)