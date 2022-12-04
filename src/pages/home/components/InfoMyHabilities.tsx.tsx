import DataScience from "./DataScience";
import FullStack from "./FullStack";
import Desing from "./Design";

export default function InfoMyHabilities(props: {section: number}) {
  return (
    <div>
      <h1 className="text-center appear-title mb-4">¿Que es lo que hago?</h1>
      <div className={"m-5 animation-info-inverted " + (props.section === 1 ? "" : "section-hide")}>
        <DataScience />
      </div>
      <div className={"m-5 animation-info " + (props.section === 2 ? "" : "section-hide")}>
        <FullStack />
      </div>

      <div className={"m-5 animation-info-inverted " + (props.section === 3 ? "" : "section-hide")}>
        <Desing />
      </div>
    </div>
  );
}
