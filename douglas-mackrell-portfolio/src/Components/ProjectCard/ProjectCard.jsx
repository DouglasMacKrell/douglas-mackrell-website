import React, { useState, useRef } from "react";
import Cheveron from "./Cheveron";

import "./ProjectCard.css";

const ProjectCard = ({ title, content, image }) => {
  const [displayCard, setDisplayCard] = useState("");
  const [adjustedHeight, setAdjustedHeight] = useState("0px");
  const [adjustedRotation, setAdjustedRotation] = useState("accordion__icon");

  const contentBox = useRef(null);

  const toggleAccordion = () => {
    setDisplayCard(displayCard === "" ? "accordion__active" : "");
    setAdjustedHeight(
      displayCard === "accordion__active" ? "0px" : `${contentBox.current.scrollHeight}px`
    );
    setAdjustedRotation(
      displayCard === "accordion__active" ? "accordion__icon" : "accordion__icon rotate"
    );
  };

  return (
    <div className="project-card">
      <div className={`accordion ${displayCard}`} onClick={toggleAccordion} >
        <img className="project-card__image" src={image} alt={title} />
        <p className="accordion__title">{title}</p>
        <Cheveron className={`${adjustedRotation}`} width={10} fill={"#777"} />
      </div>
      <div
        ref={contentBox}
        style={{ maxHeight: `${adjustedHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectCard;
