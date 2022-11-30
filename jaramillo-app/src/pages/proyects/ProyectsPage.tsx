import Footer from "../components/Footer";
import Navbar from "../home/components/Navbar";
import ProyectCard from "./components/ProyectCard";
import proyects from "./data";
import Proyect from "./interfaces";

const dataProyect: Array<Proyect> = proyects;

export default function ProyectsPage() {
  return (
    <div className="content-page">
      <section id="content">
        <Navbar />
        <div className="container align-middle mt-3">
          <div className="text-center">
            <h1>Mis proyectos</h1>
          </div>
          <div className="container align-middle card-view">
            {dataProyect.map((proyect: Proyect) => {
              return <ProyectCard proyect={proyect} />;
            })}
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
