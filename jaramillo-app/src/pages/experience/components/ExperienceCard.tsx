import Experiences from "../interfaces";

export default function ExperienceCard(props: {experience: Experiences}) {
  return (
    <div className="card card-custom m-5 animation-info">
      <div className="card-body">
        <h5 className="card-title">{props.experience.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.experience.subTitle}</h6>
        <p className="card-text">{props.experience.info}</p>
      </div>
    </div>
  );
}
