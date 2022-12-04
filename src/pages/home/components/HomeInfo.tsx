export default function HomeInfo() {
  return (
    <div className="home-content">
      <h1 className="typing-special-title">Hola! Soy Cristóbal</h1>
      <h3 className="typing-special-sub-title mt-2">Bienvenido a mi portafolio</h3>
      <p className="p-info-home appear margin-bottom-lg text-justify mt-4">
        Ingeniero Civil en Computación, con motivación en la programación de
        todo tipo (Software, lógica, Bases de datos, etc). Capacidad de aprender
        de todo tipo de lenguajes de programación dependiendo del área en que se
        desea trabajar.
      </p>
      <div className="arrow-info">
        Desliza hacia abajo para conocerme más{" "}
        <i className="fa-solid fa-arrow-down mx-2 mt-1"></i>
      </div>
    </div>
  );
}
