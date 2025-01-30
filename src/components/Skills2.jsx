import React, { useState } from "react";
import "../styles/Skills2.css";
import Radio from "./Radio";

export default function Skills() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [isFading, setIsFading] = useState(false); // Nuevo estado para animación

  const handleOptionChange = (option) => {
    setIsFading(true); // Inicia el fade-out
    setTimeout(() => {
      setSelectedOption(option);
      setIsFading(false); // Finaliza el fade-in
    }, 300); // Duración del fade-out
  };

  const skills = {
    option1: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        alt: "HTML5",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        alt: "CSS3",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        alt: "Node.js",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        alt: "React.js",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        alt: "MySQL",
      },
    ],
    option2: [
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        alt: "VsCode",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        alt: "GitHub",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        alt: "NPM",
      },
      {
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
        alt: "Chrome",
      },
    ],
  };

  return (
    <section className="skills" id="skills">

      <div className="left-column-skill">
        <h2>¿Qué tecnologías incluye mi programación?</h2>
        <p>Selecciona una opción para ver las habilidades correspondientes.</p>
        <Radio setSelectedOption={handleOptionChange} />
      </div>

      <div className="right-column-skill">
        <div className={`skills-container ${isFading ? "fade-out" : "fade-in"}`}>
          {skills[selectedOption].map((skill, index) => (
            <div className="skill" key={index}>
              <img src={skill.img} alt={skill.alt} />
              <span className="tooltip">{skill.alt}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}