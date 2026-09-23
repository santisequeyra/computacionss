import "./App.css";
import logo from "./assets/logo.png";
import { LINKS, SERVICES, STEPS } from "./data";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.43-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88zm8.41-18.29A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.48-8.4z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.8V24C19.62 23.09 24 18.1 24 12.07z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.28 0h4.37v2.05h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7V23h-4.55v-7.38c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.92-2.83 3.89V23H7.5V8z" />
  </svg>
);

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7L22 7" />
  </svg>
);

const CONTACTS = [
  {
    name: "WhatsApp",
    detail: "Respuesta rápida — es la mejor forma de contactarme",
    href: LINKS.whatsapp,
    Icon: WhatsAppIcon,
    className: "contact-whatsapp",
  },
  {
    name: "Instagram",
    detail: "@computacionss — novedades y trabajos realizados",
    href: LINKS.instagram,
    Icon: InstagramIcon,
    className: "contact-instagram",
  },
  {
    name: "Facebook",
    detail: "ComputacionSS en Facebook",
    href: LINKS.facebook,
    Icon: FacebookIcon,
    className: "contact-facebook",
  },
  {
    name: "LinkedIn",
    detail: "Conectemos y crezcamos juntos en LinkedIn!",
    href: LINKS.linkedin,
    Icon: LinkedInIcon,
    className: "contact-linkedin",
  },
  {
    name: "Email",
    detail: "Si preferís, escribime un email y te respondo a la brevedad",
    href: LINKS.email,
    Icon: MailIcon,
    className: "contact-email",
  },
];

function App() {
  return (
    <div className="page">
      <div className="grid-bg" aria-hidden="true" />

      <header className="header">
        <a className="brand" href="#inicio">
          <img src={logo} alt="Logo de ComputaciónSS" className="brand-logo" />
          <span className="brand-name">
            Computación<span className="brand-ss">SS</span>
          </span>
        </a>
        <a className="btn btn-whatsapp btn-sm" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
          <WhatsAppIcon className="btn-icon" />
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="badge">📍 Servicio técnico en La Plata</span>
            <h1>
              Tu computadora, <span className="text-pink">reparada</span>{" "}
              <span className="text-cyan">rápido</span> y{" "}
              <span className="text-amber">sin vueltas</span>.
            </h1>
            <p className="hero-text">
              Reparación, mantenimiento y armado de PC y notebooks. Atención
              personalizada, presupuesto claro y soluciones que duran.
            </p>
            <div className="hero-actions">
              <a className="btn btn-whatsapp" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="btn-icon" />
                Pedí tu presupuesto
              </a>
              <a className="btn btn-ghost" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-glow" aria-hidden="true" />
            <img src={logo} alt="" className="hero-logo" />
          </div>
        </section>

        <section className="section" id="servicios">
          <h2>
            ¿Qué puedo hacer <span className="text-cyan">por tu equipo</span>?
          </h2>
          <p className="section-sub">Servicios pensados para que tu compu vuelva a rendir al máximo.</p>
          <div className="services-grid">
            {SERVICES.map((service) => (
              <article key={service.title} className={`service-card accent-${service.accent}`}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>
            Así de <span className="text-pink">simple</span>
          </h2>
          <p className="section-sub">Tres pasos y tu equipo vuelve a funcionar.</p>
          <div className="steps">
            {STEPS.map((step) => (
              <div key={step.number} className="step">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <h2>
            ¡<span className="text-amber">Contactame</span>!
          </h2>
          <p className="section-sub">Elegí el canal que más te guste. Te respondo a la brevedad.</p>
          <div className="contact-grid">
            {CONTACTS.map(({ name, detail, href, Icon, className }) => (
              <a
                key={name}
                className={`contact-card ${className}`}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="contact-icon" />
                <span className="contact-name">{name}</span>
                <span className="contact-detail">{detail}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <img src={logo} alt="" className="footer-logo" />
        <p>
          © {new Date().getFullYear()} ComputaciónSS — Servicio técnico en La
          Plata, Buenos Aires.
        </p>
      </footer>
    </div>
  );
}

export default App;
