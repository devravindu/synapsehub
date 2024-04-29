import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className=".synapsehub__header section__padding" id="home">
      <div className="synapsehub__header-content">
        <h1 className="gradient__text">
          Let's Build Something With SynapseHub
        </h1>
        <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className="synapsehub__header-content__input">
          <input type="text" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="synapsehub__header-content__people">
          <img src={people} alt="People" />
          <p>1600+ people have access and visit past 24h</p>
        </div>
      </div>
      <div className="synapsehub__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
