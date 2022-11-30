import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-3 text-white navbar">
      <div className="ml-auto">
        <Link className="link-ref" to="/">
          Inicio
        </Link>
        <Link className="link-ref" to="/about">
          Sobre mi
        </Link>
        <Link className="link-ref" to="/experience">
          Experiencia
        </Link>
        <Link className="link-ref" to="/proyects">
          Mis proyectos
        </Link>
        <Link className="link-ref" to="/contact">
          Contacto
        </Link>
        <a
          href="https://www.linkedin.com/in/cristobal-jaramillo-20b298227/"
          className="icon-info"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/JaramilloCris"
          className="icon-info"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </nav>
  );
}
