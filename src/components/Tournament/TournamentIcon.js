import React from 'react';
import {
  Glyphicon
} from 'react-bootstrap';

const TournamentIcon = ({icon}) => {
  return (
    <div className="tournament-icon">
      <Glyphicon glyph={icon}/>
    </div>
  );
};

export default TournamentIcon;
