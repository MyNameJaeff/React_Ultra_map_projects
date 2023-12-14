import React from "react";
import "./Hemisphere.css";
import Norhtern from "./img/Northen.png";
import Southern from "./img/Southern.png";

const hemisphereConfig = {
  Northern: {
    text: "It is Northern Hemisphere",
    picture: Norhtern,
  },
  Southern: {
    text: "It is Southern Hemisphere",
    picture: Southern,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <div className="image">
          <img src={picture} alt="Hemisphere" />
        </div>
        <div className="ui teal bottom attatched label">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
