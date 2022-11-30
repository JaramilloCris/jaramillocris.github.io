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
      </div>
    </nav>
  );
}
