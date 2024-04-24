import React from "react";
import "./feature.css";

const Feature = ({title, text}) => {
  return (
    <div className="synapsehub__features-container__feature">
      <div className="synapsehub__what-synapse-hub__container-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="synapsehub__what-synapse-hub__container-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
