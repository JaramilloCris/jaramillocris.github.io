import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-3 text-white navbar">
      <div className="ml-auto navbar-div">
        <Link className="link-ref" to="/">
          <i className="fa-solid fa-house"></i>
          <span className="m-2 text-navbar">Inicio</span>
        </Link>
        <Link className="link-ref" to="/about">
          <i className="fa-solid fa-person"></i>
          <span className="m-2 text-navbar">Sobre mi</span>
        </Link>
        <Link className="link-ref" to="/experience">
          <i className="fa-solid fa-briefcase"></i>
          <span className="m-2 text-navbar">Experiencia</span>
        </Link>
        <Link className="link-ref" to="/proyects">
          <i className="fa-solid fa-laptop-code"></i>
          <span className="m-2 text-navbar">Mis proyectos</span>
        </Link>
        <Link className="link-ref" to="/contact">
          <i className="fa-solid fa-envelope"></i>
          <span className="m-2 text-navbar">Contacto</span>
        </Link>
      </div>
    </nav>
  );
}
