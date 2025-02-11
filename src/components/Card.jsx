import "../styles/Card.css";
import Boton from './Boton'

const carta = [
  {
    imagen: "./Sitezylogo.png",
    nombre: "Sitezy",
    sobre: "Web development",
    descripcion:
      "Web EN PROCESO pensada para crear paginas de manera facil y sencilla utilizando plantillas y colores personalizados",
  },
  {
    imagen: "./maylogo.png",
    nombre: "StyleMay",
    sobre: "Web development",
    descripcion:
      "Mi primera web diseñada para emprendimiento de cosmetologia",
    url: "https://Stilemay.com",
  },
];

export default function Card() {
  return (
    <>
    <div className="text-pop-up-top">
      <h1 className="titulos" id="title-proyects">{"<"}Proyectos{"/>"}</h1>
    </div>
      <div className="section" id="cards">
        {carta.map((carta, index) => (
          <div className="cont" key={index}>

            <div className="context">
              <h2>{carta.nombre}</h2>
              <span>{carta.descripcion}</span>
              <Boton link = {carta.url}/>
            </div>

            <div className="content-image">
              <img src={carta.imagen} alt={`Proyecto ${index + 1}`} />
            </div>

          </div>
        ))}
      </div>
    </>
  );
}
