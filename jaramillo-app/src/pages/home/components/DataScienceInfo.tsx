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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse
          autem ad ex dignissimos, a adipisci dolorum, deleniti officiis, quod
          eligendi totam dicta distinctio quos blanditiis perferendis eius in
          harum!
        </p>
      </div>
    </div>
  );
}
