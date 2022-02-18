import React, { Component } from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((elem, index) => (
          <PlanetCard planetImage={ elem.image } planetName={ elem.name } key={ index } />
        ))}
      </div>
    );
  }
}
