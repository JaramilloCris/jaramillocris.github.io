import Navbar from "../home/components/Navbar";
import ProyectCard from "./components/ProyectCard";
import proyects from "./data";
import Proyect from "./interfaces";

const dataProyect: Array<Proyect> = proyects;

export default function ProyectsPage() {
  return (
    <div id="content" className="content-page">
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
    </div>
  );
}
