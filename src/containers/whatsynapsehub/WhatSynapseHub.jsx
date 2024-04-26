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
        <Feature title={'What is SynapseHub'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'}/>
      </div> 
      <div className="synapsehub__what-synapse-hub__heading">
        <h1 className="gradient__text">
          The Possibiities are Beyond Your Imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="synapsehub__what-synapse-hub__container">
        <Feature title={'Chatbots'} text={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'} />
        <Feature title={'Knowledgebase'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} />
        <Feature title={'Education'} text={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} />
      </div>
    </div>
  );
};

export default WhatSynapseHub;
