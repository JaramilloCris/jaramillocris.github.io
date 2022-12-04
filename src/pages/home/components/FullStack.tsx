import DataScienceInfo from "./DataScienceInfo";
import FullStackInfo from "./FullStackInfo";
import ImageHome from "./ImageHome";
import fullStack from "../../../assets/img/full-stack.svg"

export default function FullStack() {
  return (
    <div>
      <div className="row align-items-center">
        <div className="col-sm-6 col-xs-12">
          <FullStackInfo />
        </div>
        <div className="col-sm-6 text-center d-none d-sm-block">
            <img src={fullStack} className="image-habilities"/>
        </div>
      </div>
    </div>
  );
}
