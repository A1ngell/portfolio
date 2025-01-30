import React, { useState } from "react";
import "../styles/Aboutme.css";

export default function Skills() {

    return (
        <section className="Aboutme" id="Aboutme">
            <div className="row-me">

                {/* Columna de Educación */}
                <div className="left-column-me">
                    <h2 className="sub-title" id="educacion">{"<"}Educación{"/>"}</h2>
                    <div className="timeline-container">
                        <div className="timeline-entry">
                            <h3 className="timeline-title">Título Técnico</h3>
                            <div className="timeline-meta">
                                <time className="timeline-date">2019-2025</time>
                                <div className="timeline-subtitle">E.E.S.T N°14</div>
                            </div>
                            <div className="timeline-description">
                                Formación en desarrollo de software, especializándome en programación web y bases de datos.
                            </div>
                        </div>
                        <div className="timeline-entry">
                            <h3 className="timeline-title">Cursos web</h3>
                            <div className="timeline-meta">
                                <time className="timeline-date">2024</time>
                                <div className="timeline-subtitle">Curso Online</div>
                            </div>
                            <div className="timeline-description">
                                Aprendí los fundamentos de React, incluyendo hooks y componentes funcionales.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna de Experiencia Laboral */}
                <div className="right-column-me">
                    <h2 className="sub-title" id="experiencia">{"<"}Experiencia{"/>"}</h2>
                    <div className="timeline-container">

                        <div className="timeline-entry">
                            <h3 className="timeline-title">En la espera...</h3>
                            <div className="timeline-meta">
                                <time className="timeline-date">Presente</time>
                                <div className="timeline-subtitle">????</div>
                            </div>
                            <div className="timeline-description">
                                ????????????????????????????
                            </div>
                        </div>

                        <div className="timeline-entry">
                            <h3 className="timeline-title">En la espera...</h3>
                            <div className="timeline-meta">
                                <time className="timeline-date">Presente</time>
                                <div className="timeline-subtitle">????</div>
                            </div>
                            <div className="timeline-description">
                                ????????????????????????????
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
