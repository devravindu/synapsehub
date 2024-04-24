import React from "react";
import "./whatsynapsehub.css";
import Feature from "../../components/feature/Feature";

const WhatSynapseHub = () => {
  return (
    <div
      className="synapsehub__what-synapse-hub section__margin"
      id="synapseHub"
    >
      <div className="synapsehub__what-synapse-hub__feature">
        <Feature title={'Hi There'} text={'Why So Serious'}/>
      </div>
      <div className="synapsehub__what-synapse-hub__heading">
        <h1 className="gradient__text">
          The Possibiities are Beyond Your Imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="synapsehub__what-synapse-hub__container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default WhatSynapseHub;
