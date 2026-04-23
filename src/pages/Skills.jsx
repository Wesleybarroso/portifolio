import React, { useState, useEffect, useRef } from "react";

const Skills = ({ dark }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visible, setVisible] = useState([]);
  const sectionRef = useRef(null);

  // Mapeamento de cores baseado no tema
  const iconColor = dark ? "#FFFFFF" : "#000000";
  const textColor = dark ? "#ffffff" : "#333333";
  const cardBg = dark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)";
  const cardBorder = dark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(0, 0, 0, 0.1)";

  const skillsData = [
    { name: "React", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><circle cx="64" cy="64" r="11.4" fill="#61DAFB"/><g fill="none" stroke="#61DAFB" strokeWidth="5.5"><ellipse cx="64" cy="64" rx="54" ry="21"/><ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(60 64 64)"/><ellipse cx="64" cy="64" rx="54" ry="21" transform="rotate(120 64 64)"/></g></svg> },
    { name: "JavaScript", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><rect width="128" height="128" rx="8" fill="#F7DF1E"/><text x="16" y="112" fontSize="76" fontWeight="bold" fontFamily="Arial" fill="#000">JS</text></svg> },
    { name: "TypeScript", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><rect width="128" height="128" rx="8" fill="#3178C6"/><text x="14" y="112" fontSize="76" fontWeight="bold" fontFamily="Arial" fill="#fff">TS</text></svg> },
    { name: "Node.js", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><path fill="#83CD29" d="M64 4L10 36v64l54 32 54-32V36z"/><path fill="#404137" d="M64 4L10 36l54 32 54-32z"/><path fill="#fff" d="M56 88V56L38 46v32z"/><path fill="#83CD29" d="M72 88l18-10V46L72 56z"/><path fill="#fff" d="M56 56l8-4 8 4-8 5z"/></svg> },
    { name: "SCSS", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><circle cx="64" cy="64" r="60" fill="#CF649A"/><path fill="#fff" d="M88 50c-8 0-14 4-17 9-3-5-8-8-14-8-5 0-9 2-12 5l1-5H32l-9 44h14l5-24c1-5 5-9 9-9s6 3 5 8l-5 25h14l5-24c1-5 5-9 9-9s6 3 5 8l-5 25h14l6-27c2-11-3-18-14-18z"/></svg> },
    { name: "Docker", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><path fill="#2496ED" d="M116 54c-2-2-7-3-12-2-1-5-4-9-9-13l-3-2-2 3c-3 4-3 10-1 15 1 3 3 6 6 8-3 2-9 3-17 3H8l-1 2C6 71 6 81 11 89l2 3 4-1c13-1 23-6 30-13 6 0 13-1 18-2 6-1 11-4 15-8 6 2 13 2 18 0 2-1 4-2 5-4l1-2-1-2c0-2-1-6-3-8z"/><rect x="14" y="50" width="12" height="12" rx="1" fill="#2496ED"/><rect x="30" y="50" width="12" height="12" rx="1" fill="#2496ED"/><rect x="46" y="50" width="12" height="12" rx="1" fill="#2496ED"/><rect x="62" y="50" width="12" height="12" rx="1" fill="#2496ED"/></svg> },
    { name: "PostgreSQL", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><circle cx="64" cy="64" r="56" fill="#336791"/><ellipse cx="64" cy="42" rx="30" ry="11" fill="#fff"/><path fill="#fff" d="M34 42v18c0 6 13.4 11 30 11s30-5 30-11V42c0 6-13.4 11-30 11S34 48 34 42z"/></svg> },
    { name: "MongoDB", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><path fill="#4DB33D" d="M64 10c-2 20-9 27-15 38-9 15-11 31-6 46 3 11 11 20 21 24l1-5c-9-5-15-15-16-26-2-16 5-29 11-40 4-8 7-16 7-22z"/><path fill="#3FA037" d="M64 10c2 20 9 27 15 38 9 15 11 31 6 46-3 11-11 20-21 24l-1-5c9-5 15-15 16-26 2-16-5-29-11-40-4-8-7-16-7-22z"/></svg> },
    { name: "Supabase", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><path fill="#3ECF8E" d="M74 10L20 78h48v40L116 50H68z"/></svg> },
    { name: "API REST", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><path fill="none" stroke={iconColor} strokeWidth="6" d="M64 64V28M64 64L32 88M64 64l32 24" /><circle cx="64" cy="24" r="14" fill="#3178C6" /><circle cx="28" cy="92" r="14" fill="#83CD29" /><circle cx="100" cy="92" r="14" fill="#F7DF1E" /><circle cx="64" cy="64" r="18" fill={iconColor} /></svg> },
    { name: "Vercel", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><path fill={iconColor} d="M64 16L120 110H8L64 16z" /></svg> },
    { name: "Render", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><path fill={iconColor} d="M96 60A24 24 0 0 0 52 50 16 16 0 0 0 36 66a20 20 0 0 0 20 20h40a16 16 0 0 0 0-32z" /></svg> },
    { name: "Linux", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><rect x="12" y="28" width="104" height="72" rx="6" fill="#1C1E21" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.1" /><circle cx="24" cy="40" r="4" fill="#FF5F56" /><circle cx="36" cy="40" r="4" fill="#FFBD2E" /><circle cx="48" cy="40" r="4" fill="#27C93F" /><path fill="none" stroke="#4AF626" strokeWidth="6" d="M24 60l12 12-12 12M48 84h24" /></svg> },
    { name: "Git", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="50" height="50"><path fill="#F34F29" d="M124.7 58.7L69.3 3.3c-1.8-1.8-4.6-1.8-6.4 0L48.1 18.1l8.1 8.1c1.9-.6 4-.2 5.5 1.3 1.5 1.5 1.9 3.6 1.3 5.5l7.8 7.8c1.9-.6 4-.2 5.5 1.3 2 2 2 5.2 0 7.2-2 2-5.2 2-7.2 0-1.5-1.5-1.9-3.6-1.3-5.5l-7.2-7.2v19c.5.3 1 .6 1.5 1 2 2 2 5.2 0 7.2-2 2-5.2 2-7.2 0-2-2-2-5.2 0-7.2.4-.4.9-.8 1.4-1.1v-19.2c-.5-.2-1-.6-1.4-1-1.5-1.5-1.9-3.6-1.3-5.5l-8-8h-25L3.3 58.7c-1.8 1.8-1.8 4.6 0 6.4l55.4 55.4c1.8 1.8 4.6 1.8 6.4 0l55.4-55.4c1.9-1.8 1.9-4.6.2-6.4z"/></svg> },
    { name: "GitHub", svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path fill={iconColor} d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        skillsData.forEach((_, i) => setTimeout(() => setVisible(prev => [...prev, i]), i * 80));
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const styles = {
    section: { padding: "80px 20px", textAlign: "center" },
    title: { 
      fontSize: "2.5rem", fontWeight: "800", marginBottom: "3rem",
      color: textColor, letterSpacing: "-1px" 
    },
    grid: { 
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", 
      gap: "20px", maxWidth: "900px", margin: "0 auto" 
    },
    card: (isHovered, isVisible) => ({
      display: "flex", flexDirection: "column", alignItems: "center", gap: "15px",
      padding: "25px", borderRadius: "20px", transition: "all 0.3s ease",
      background: dark ? (isHovered ? "#2d0548" : "#1a0b2e") : (isHovered ? "#f0e6ff" : "#ffffff"),
      border: cardBorder,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      cursor: "pointer"
    }),
    name: {
      fontSize: "0.9rem", fontWeight: "600", color: textColor
    }
  };

  return (
    <section id="skills" ref={sectionRef} style={styles.section}>
      <h2 style={styles.title}>Tecnologias</h2>
      <div style={styles.grid}>
        {skillsData.map((skill, index) => (
          <div
            key={skill.name}
            style={styles.card(hoveredIndex === index, visible.includes(index))}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>{skill.svg}</div>
            <span style={styles.name}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;