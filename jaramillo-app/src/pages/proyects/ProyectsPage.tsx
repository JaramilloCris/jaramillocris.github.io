import Footer from "../components/Footer";
import Navbar from "../home/components/Navbar";
import ProyectMemes from "./components/ProyectMemes";
import ProyectParticipa from "./components/ProyectParticipa";

export default function ProyectsPage() {
  return (
    <div className="content-page">
      <section id="content">
        <Navbar />
        <div className="container align-middle mt-3">
          <div className="text-center mb-4">
            <h1>Mis proyectos</h1>
          </div>
          <div className="container align-middle">
            <ProyectMemes />
            <ProyectParticipa />
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
