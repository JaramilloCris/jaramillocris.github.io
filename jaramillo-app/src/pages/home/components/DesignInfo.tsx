import figma from "../../../assets/img/figma.png";
import balsamiq from "../../../assets/img/balsamiq.png"

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse autem
        ad ex dignissimos, a adipisci dolorum, deleniti officiis, quod eligendi
        totam dicta distinctio quos blanditiis perferendis eius in harum!
      </p>
      </div>
    </div>
  );
}
