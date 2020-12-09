import React from "react";

import "./styles.scss";

const EventCard = ({ name, local, link }) => {
  return (
    <div className="eventCard">
      <a href={link}>
        <div>
        <span className="name">{name}</span>
        </div>
        <div>
        <span className="local">{local}</span>
        </div>
      </a>
    </div>
  );
};

export default EventCard;
