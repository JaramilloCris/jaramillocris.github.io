import DataScienceInfo from "./DataScienceInfo";
import dataScience from "../../../assets/img/data-science.svg";

export default function DataScience() {
  return (
    <div>
      <div className="row align-items-center">
        <div className="col-sm-6 text-center d-none d-sm-block">
          <img src={dataScience} className="image-habilities" />
        </div>
        <div className="col-sm-6 col-xs-12">
          <DataScienceInfo />
        </div>
      </div>
    </div>
  );
}
