import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropType.string.isRequired,
};
// Title.defaultProps = {
//   headline: 'Planetas',
// };
