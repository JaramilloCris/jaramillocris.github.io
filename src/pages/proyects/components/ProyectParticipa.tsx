export default function ProyectParticipa() {
  return (
    <div className="container align-items-center mb-3">
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <h3>Psifos - Votación electronica</h3>
          <span>Proyecto de votación electronica de Participa Uchile</span>
          <p>
            Psifos es una herramienta de votación electronica utilizada dentro
            de la Universidad de Chile. Esta basada en Helios Voting
          </p>

          <a
            className="link-repository"
            href="https://github.com/clcert/psifos-dockerized"
            target="_blank"
          >
            <span>
              Repositorio <i className="fa-brands fa-github"></i>
            </span>
          </a>

          <hr className="mb-3" />
        </div>
      </div>
    </div>
  );
}
