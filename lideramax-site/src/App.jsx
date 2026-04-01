import { useEffect, useState } from "react";
import "./App.css";
import logoLight from "./assets/logo.png";
import logoDark from "./assets/logo branco.png";

const services = [
  {
    title: "Formação de Líderes",
    description: "Capacitação estratégica para equipes com foco em resultados reais.",
  },
  {
    title: "Palestras Corporativas",
    description: "Conteúdo inspirador com técnicas práticas para ambientes de alta performance.",
  },
  {
    title: "Terceirização",
    description: "Gestão operacional eficiente com parceiros alinhados à cultura da empresa.",
  },
  {
    title: "Organização Empresarial",
    description: "Estruturação de processos para escalar com disciplina e agilidade.",
  },
];

const stats = [
  { label: "Empresas atendidas", value: "+120" },
  { label: "Projetos entregues", value: "+85" },
  { label: "Crescimento médio", value: "+45%" },
];

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <div className="page-shell">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <img src={theme === "dark" ? logoDark : logoLight} alt="LideraMax" className="logo" />
          <span>LideraMax</span>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
        <button type="button" className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "Modo Escuro" : "Modo Claro"}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Alta performance em liderança</span>
          <h1>Transforme sua equipe em um motor de resultados.</h1>
          <p>
            A LideraMax cria liderança estratégica, equipes engajadas e processos ágeis para acelerar o crescimento da sua empresa.
          </p>
          <div className="hero-actions">
            <a href="https://api.whatsapp.com/send/?phone=5513996643242&text&type=phone_number&app_absent=0&wame_ctl=1" className="btn primary">Agendar Consultoria</a>
            <a href="#services" className="btn secondary">Ver serviços</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card__inner">
            <p className="hero-card__label">Resultados em destaque</p>
            <h2>Estratégia + Execução</h2>
            <p>Projetos desenhados para gerar clareza, foco e performance em todas as áreas.</p>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="services" className="section services-section">
        <div className="section-header">
          <p className="eyebrow">Serviços</p>
          <h2>O que entregamos para sua empresa</h2>
        </div>
        <div className="cards">
          {services.map((item) => (
            <div key={item.title} className="card service-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className="section about-section">
        <div className="about-grid">
          <div>
            <p className="eyebrow">Sobre</p>
            <h2>Expertise em liderança e resultados sustentáveis</h2>
            <p>
              Somos especialistas em ajudar empresas a construir liderança forte, organizar operações e acelerar a performance com clareza e disciplina.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-card">
              <strong>Decisões mais rápidas</strong>
              <span>Mapeamos sua operação para que a tomada de decisão seja objetiva e eficaz.</span>
            </div>
            <div className="feature-card">
              <strong>Times mais engajados</strong>
              <span>Desenvolvemos líderes preparados para inspirar e manter a equipe focada no crescimento.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Vamos conversar sobre seu próximo passo?</h2>
            <p>Envie uma mensagem e agende uma conversa estratégica para transformar sua empresa.</p>
          </div>
          <a href="https://api.whatsapp.com/send/?phone=5513996643242&text&type=phone_number&app_absent=0&wame_ctl=1" className="btn primary">Falar no WhatsApp</a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 LideraMax</span>
        <span>Transformando líderes e resultados.</span>
      </footer>

      <a
        href="https://api.whatsapp.com/send/?phone=5513996643242&text&type=phone_number&app_absent=0&wame_ctl=1"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        <span className="whatsapp-float__icon">💬</span>
        WhatsApp
      </a>

    </div>
  );
}

export default App;