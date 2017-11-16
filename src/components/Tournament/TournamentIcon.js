import React from 'react';
import {
  Glyphicon
} from 'react-bootstrap';

const TournamentIcon = ({icon}) => {
  return (
    <section className="tournament-icon">
      <Glyphicon glyph={icon} />
    </section>
  );
};

export default TournamentIcon;
