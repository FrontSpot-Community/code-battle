import React from 'react';
import {Link} from 'react-router-dom';

const TournamentInfo = ({id, title, author}) => {
  return (
    <section className="tournament-info">
      <section className="tournament-title">
        <Link to={`/battle/${id}`}>
         {title}
        </Link>
      </section>
      <section className="tournament-author">
        by {author}
      </section>
    </section>
  );
};

export default TournamentInfo;
