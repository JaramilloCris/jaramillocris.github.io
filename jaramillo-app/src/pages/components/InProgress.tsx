export default function InProgress() {
  return (
    <div className="container align-items-center in-progress">
      <div>
        <h3 className="text-center">
          Esta sección se encuentra en desarrollo!
        </h3>
        <p className="text-center">Pronto estara disponible :)</p>
        <div className="text-center">
          <img
            className="in-progress-image"
            src={require("../../assets/img/work.png")}
          />
        </div>
      </div>
    </div>
  );
}
