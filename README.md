# 🚀 Portfólio - Wesley Barroso

Este projeto é o meu portfólio pessoal, desenvolvido para demonstrar minhas habilidades como Engenheiro de Software Fullstack. O objetivo foi criar uma interface moderna, responsiva e performática, utilizando tecnologias de ponta.

## 🛠 Tecnologias Utilizadas

O projeto foi construído com uma stack focada em performance e experiência do usuário (UX):

- **Frontend:** React, Vite, Framer Motion (animações), Styled Components (estilização).
- **Backend:** Node.js (integração para envio de e-mails).
- **Ferramentas:** Docker, Nginx, Git.
- **Linguagem:** JavaScript (ES6+).

## 📋 Funcionalidades
- **UI Responsiva:** Adaptável para desktops, tablets e mobile.
- **Animações fluidas:** Integração com Framer Motion para uma experiência imersiva.
- **Componentização:** Estrutura organizada seguindo boas práticas de desenvolvimento React.
- **Deploy Otimizado:** Pronto para produção via Docker em ambientes VPS.

---

## 🚀 Como rodar o projeto localmente

Para executar o projeto em sua máquina de desenvolvimento:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Wesleybarroso/portifolio.git](https://github.com/Wesleybarroso/portifolio.git)
   cd portifolio

2. Instale as dependências:
   ```bash
   npm install

3. Inicie o servidor de dessenvolvimento:
   ```bash
   npm run dev 

4. **Acesse http://wwww.wesleybarroso.com**

🐳 Deploy em VPS (Docker)
Este projeto está containerizado para facilitar o deploy em qualquer servidor Linux (Ubuntu/Debian) com Docker instalado.

1. Estrutura do Dockerfile
O Dockerfile abaixo utiliza uma estratégia de multi-stage build para garantir que a imagem final seja leve (apenas os arquivos estáticos servidos pelo Nginx).

**Dockerfile**

# Stage 1: Build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Produção com Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

2. Orquestração (docker-compose.yml)
Utilize o docker-compose.yml para subir a aplicação:
------------------------------------------------------
**YAML**
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "80:80"
    restart: always

-------------------------------------------------------

3. Executando o Deploy na VPS
Após clonar o repositório na sua VPS, execute:
```bash
# Construir e subir o container em modo detached
docker-compose up -d --build

⚠️ Segurança e Boas Práticas
Variáveis de Ambiente: Nunca suba arquivos .env com chaves de API reais para o repositório. Utilize um arquivo .env.example como modelo para outros desenvolvedores.

Ignorar pastas: O .gitignore já está configurado para ignorar node_modules, .env, e pastas de build, garantindo um repositório limpo.

👨‍💻 Contato
**Wesley Barroso - Engenheiro de Software**

LinkedIn [wesleybleite]

GitHub   [Wesleybarroso]

Email: [contato@wesleybarroso.com]

Este projeto foi desenvolvido como parte do meu crescimento profissional e contínuo aprendizado em desenvolvimento de sistemas escaláveis.