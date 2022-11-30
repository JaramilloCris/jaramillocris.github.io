import python from "../../../assets/img/python.png";
import react from "../../../assets/img/react.png";
import angular from "../../../assets/img/angular.png";
import postgres from "../../../assets/img/postgres.png";
import fastapi from "../../../assets/img/fastapi.png";
import mysql from "../../../assets/img/mysql.png";

export default function FullStackInfo() {
  return (
    <div>
      <h1 className="mb-3">Full Stack</h1>
      <div className="text-center">
        <img className="m-2" style={{ width: 50, height: 50 }} src={python} />
        <img className="m-2" style={{ width: 60, height: 50 }} src={react} />
        <img className="m-2" style={{ width: 50, height: 50 }} src={angular} />
        <img className="m-2" style={{ width: 50, height: 50 }} src={postgres} />
        <img className="m-2" style={{ width: 50, height: 50 }} src={fastapi} />
        <img className="m-2" style={{ width: 50, height: 50 }} src={mysql} />
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
