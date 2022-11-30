import uiUx from "../../../assets/img/ui-ux.png";
import DesignInfo from "./DesignInfo";

export default function Desing() {
  return (
    <div>
      <div className="row align-items-center">
        <div className="col-sm-6 text-center d-none d-sm-block">
          <img src={uiUx} className="image-habilities" />
        </div>
        <div className="col-sm-6 col-xs-12">
          <DesignInfo />
        </div>
      </div>
    </div>
  );
}
