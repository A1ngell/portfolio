import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="center-code" id="Contact">
        <div className="code-editor">
          <div className="header">
            <span className="title">CSS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="icon"
            >
              <g strokeWidth={0} id="SVGRepo_bgCarrier" />
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="#4C4F5A"
                  d="M6 6L18 18"
                />{" "}
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  stroke="#4C4F5A"
                  d="M18 6L6 18"
                />{" "}
              </g>
            </svg>
          </div>
          <div className="editor-content">
            <code className="code">
              <p>
                <span className="color-0">Contacto </span>{" "}
                <span>{"{"}</span>
              </p>
              <p className="property">
                <span className="color-2">Gmail</span>
                <span>:</span>
                <p className="color-1">angelgomezmolina2@gmail.com</p>;
              </p>
              <p className="property">
                <span className="color-2">Github</span>
                <span>:</span>
                <span className> <a href="https://github.com/A1ngell">A1ngell</a></span>;
              </p>
              <p className="property">
                <span className="color-2">LinkedIn</span>
                <span>: </span>
                <span className="color-1">
                  <span className="color-3"><a href="https://www.linkedin.com/in/a1ngell/">Angel Gomez</a></span>
                </span>
                ;
              </p>
              <p className="property">
                <span className="color-2">Animation</span>
                <span>: </span>
                <span className="color-1">Espero su mensaje :) </span>;
              </p>
              <span>{"}"}</span>
            </code>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .center-code {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .code-editor {
    width: 600px;
    height: 500px;
    background-color: #1d1e22;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 2px;

    @media (max-width: 768px) {
      width: 90%;
      height: auto;
      padding: 10px;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
  }

  .code {
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  .code a {
    text-decoration: none;
    color: orange;
  }

  .title {
    font-family: Lato, sans-serif;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: 1.57px;
    color: rgb(212 212 212);

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  .icon {
    width: 20px;
    transition: 0.2s ease;
  }

  .icon:hover {
    cursor: pointer;
    border-radius: 50px;
    background-color: #6e7281;
  }

  .editor-content {
    margin: 0 10px 10px;
    color: white;
  }

  .property {
    margin-left: 30px;

    @media (max-width: 768px) {
      margin-left: 15px;
    }
  }

  .property:hover {
    cursor: text;
  }

  .editor-content .color-0 {
    color: rgb(86 156 214);
  }

  .editor-content .color-1 {
    color: rgb(182 206 168);
  }

  .editor-content .color-2 {
    color: rgb(156 220 254);
  }

  .editor-content .color-3 {
    color: rgb(207 146 120);
  }

  .color-preview-1,
  .color-preview-2 {
    height: 8px;
    width: 8px;
    border: 1px solid #fff;
    display: inline-block;
    margin-right: 3px;
  }

  .color-preview-1 {
    background-color: #1d1e22;
  }

  .color-preview-1 {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default Card;
