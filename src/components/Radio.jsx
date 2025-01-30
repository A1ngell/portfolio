import React from 'react';
import styled from 'styled-components';

const Radio = ({ setSelectedOption }) => {
  return (
    <StyledWrapper>
      <div id="firstFilter" className="filter-switch">
        <input
          defaultChecked
          id="option1"
          name="options"
          type="radio"
          onChange={() => setSelectedOption("option1")}
        />
        <label className="option" htmlFor="option1">Habilidades</label>
        <input
          id="option2"
          name="options"
          type="radio"
          onChange={() => setSelectedOption("option2")}
        />
        <label className="option" htmlFor="option2">Herramientas</label>
        <span className="background" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .filter-switch {
    border: 2px solid #ffc000;
    border-radius: 30px;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    width: 400px;
    overflow: hidden;
  }
  .filter-switch input {
    display: none;
  }
  .filter-switch label {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.5s;
    font-weight: 500;
    font-size: 18px;
  }
  .filter-switch .background {
    position: absolute;
    width: 49%;
    height: 38px;
    background-color: #ffc000;
    top: 4px;
    left: 4px;
    border-radius: 30px;
    transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  #option2:checked ~ .background {
    left: 50%;
  }
  #option1:checked + label[for="option1"] {
    color: #212121;
    font-weight: bold;
  }
  #option2:checked + label[for="option2"] {
    color: #212121;
    font-weight: bold;
  }
  #option1:not(:checked) + label[for="option1"],
  #option2:not(:checked) + label[for="option2"] {
    color: #7d7d7d;
  }
    
  @media (max-width: 768px) {
  .filter-switch {
    height: 40px; /* Reducir altura del botón */
    width: 300px; /* Reducir ancho del botón */
  }

  .filter-switch label {
    font-size: 16px; /* Reducir tamaño de texto */
  }

  .filter-switch .background {
    height: 30px; /* Ajustar la altura del fondo */
    top: 5px; /* Centrar el fondo verticalmente */
    left: 5px; /* Mantener espacio proporcional */
  }
}
  
  `;

export default Radio;