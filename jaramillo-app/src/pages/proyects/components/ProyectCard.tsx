import Proyect from "../interfaces";

export default function ProyectCard(props: { proyect: Proyect }) {
  return (
    <div className="card card-custom m-5 animation-info">
      <div className="card-body">
        <h5 className="card-title">{props.proyect.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.proyect.subTitle}
        </h6>
        <p className="card-text">{props.proyect.info}</p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}
