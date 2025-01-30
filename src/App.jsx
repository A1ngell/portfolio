import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card.jsx";
import Skills from "./components/Skills2.jsx";
import Footer from "./components/Footer.jsx";
import Aboutme from "./components/Aboutme.jsx";
import Button from "./components/BotonUp.jsx";
import Contact from "./components/ContactMe.jsx";
import { Link } from "react-scroll";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // Mostrar botón si el scroll supera 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <main className="first-view" id="first-view">
        <h1 className="focus-in-expand">
          <span className="color-text">Angel Gomez</span>
        </h1>
        <h1 className="focus-in-expand">
          <span className="color-text">Desarrollador web</span>
        </h1>
        <p>
          <span className="color-text-sky">Full-stack </span>
          con pasión por soluciones creativas y funcionales. Listo para aportar
          al equipo y hacer que tus ideas cobren vida.
        </p>
      </main>
      <Link
        to="title-proyects"
        smooth={true}
        duration={500}
        className="bounce-top"
      >
        <div className="arrow-container">
          <img
            src="./down_arrow_icon2.svg"
            alt="Arrow Down"
            className="arrow-down"
          />
        </div>
      </Link>
      <Card />
      <Skills />
      <Aboutme />
      <Contact />
      <Footer />

      {/* Botón para volver arriba */}
      {showScrollTop && (
        <div className="scroll-top">
          <Link to="navbar" smooth={true} duration={500}>
            <Button />
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;
