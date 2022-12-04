import pytorch from "../../../assets/img/pytorch.png";
import python from "../../../assets/img/python.png";

export default function DataScienceInfo() {
  return (
    <div>
      <h1 className="mb-3">Data Science</h1>
      <div className="text-center">
        <img className="m-2" style={{ width: 150, height: 40 }} src={pytorch} />
        <img className="m-2" style={{ width: 50, height: 50 }} src={python} />
      </div>
      <div className="mt-3">
        <p className="text-justify">
          He realizado trabajos en analisis de datos junto a herramientas de
          Machine learning y Deep learning
        </p>
      </div>
    </div>
  );
}
