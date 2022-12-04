export default function ProyectMemes() {
  return (
    <div className="container align-items-center mb-3">
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <h2>Clasificadores de memes con deep learning</h2>
          <h4 className="mt-2">
            Memoria para el titulo de Ingeniero civil en computación
          </h4>
          <p className="mt-2 text-justify">
            El Instituto Milenio Fundamentos de los Datos trabaja en la
            actualidad en el estudio, caracterización y formas de generación de
            lo que llamamos «información robusta», aquel conocimiento veraz que
            puede ser extraído de fuentes no-estructuradas de datos: el
            contenido digital generado por las personas en la web, las redes
            sociales, la información multimedia o texto online escrito en
            lenguaje natural.
          </p>
          <div className="text-center">
            <img
              className="proyect-image"
              src={require("../../../assets/img/imfd.png")}
            />
          </div>
          <p className="mt-2 text-justify">
            Uno de este tipo de información robusta son los memes, donde a
            partir de ellos se puede analizar el comportamiento de la sociedad.
            Es por esto que se requiere un extractor de memes de las redes
            sociales que permita obtener material a analizar. Para solucionar
            esto se propone un modelo de clasificador de memes para lograr
            discriminar entre todas las imagenes, aquellas que representen a un
            meme.
          </p>
          <p className="mt-2 mb-3 text-justify">
            Dado que los memes presentan una estructura muy variada y una
            evolución constante, se requiere de una herramienta que los permita
            clasificar automáticamente y así lograr análizarlos en mayor
            profundidad. Por otro lado, este tipo de imágenes presentan
            temáticas que indican el tipo de humor o contenido que se quiere
            expresar. Es por esto por lo que también se desea lograr
            categorizarlos automáticamente bajo ciertas clases y así lograr
            entenderlos de mejor manera.
          </p>

          <a
            className="link-repository"
            href="https://github.com/JaramilloCris/memes-classifier"
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
