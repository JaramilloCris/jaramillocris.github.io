import Proyect from "../interfaces";

export default function ProyectCard(props: { proyect: Proyect }) {
  return (
    <div className="container align-items-center mb-3">
      <div className="d-flex justify-content-center">
        <div>
          <h3>{props.proyect.title}</h3>
          <span>{props.proyect.subTitle}</span>
          <p>{props.proyect.info}</p>
          <hr className="mb-3"/>
        </div>
      </div>
    </div>
  );
}
