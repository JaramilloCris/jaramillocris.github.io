import figma from "../../../assets/img/figma.png";
import balsamiq from "../../../assets/img/balsamiq.png";

export default function DesignInfo() {
  return (
    <div>
      <h1 className="mb-3">UI/UX Designer</h1>
      <div className="text-center">
        <img className="m-2" style={{ width: 60, height: 50 }} src={figma} />
        <img className="m-2" style={{ width: 50, height: 50 }} src={balsamiq} />
      </div>
      <div className="mt-3">
        <p>
          He realizado trabajos de prototipado de aplicaciones y diseño de
          interfaces con experiencias de usuarios. Utilizando herramientas como
          figma.
        </p>
      </div>
    </div>
  );
}
