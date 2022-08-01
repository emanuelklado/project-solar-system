import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <section className="container-missoes">
        <div data-testid="missions">
          <Title headline="Missoes" />
        </div>
        <div className="container-card">
          {missions.map((el, index) => (<MissionCard
            name={ el.name }
            year={ el.year }
            country={ el.country }
            destination={ el.destination }
            key={ index }
          />
          ))}
        </div>
      </section>
    );
  }
}
