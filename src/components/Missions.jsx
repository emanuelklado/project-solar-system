import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <section>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        <div>
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
