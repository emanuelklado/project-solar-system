import React, { Component } from "react";
import PropType from "prop-types";
import houston from "../audio/houston.mp3"
// Falta ajustar esta função, ta dando erro de promess!!!


function easterEgg(event) {
  const music = new Audio(houston);
  if ((event.target.firstChild.innerText === "Apollo 13")) {
    music.play();
  }
}

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div onClick={easterEgg} data-testid="mission-card">
        <h3 data-testid="mission-name">{name}</h3>
        <hr />
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropType.string.isRequired,
  year: PropType.string.isRequired,
  country: PropType.string.isRequired,
  destination: PropType.string.isRequired,
};
