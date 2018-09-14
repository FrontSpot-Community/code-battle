import React from 'react';
import style from './style.scss';

import HeadRow from './HeadRow';
import BodyCol from './BodyCol';
import BodyMainCol from './BodyMainCol';

const TournamentScore = (props) => {
  const {javaScript, python, csharp, java, php} = props.tournaments;

  return (
    <div className={style.wrapper}>
      <dl className={style.header}>
        <dt className={style.title}>
          Tournament Score
        </dt>
      </dl>
      <HeadRow
        headerCells={props.headerCells}
      />
      <section className={style.body}>
        <BodyMainCol key='positions' positions={props.places}/>
        <BodyCol key='javascript' positions={javaScript}/>
        <BodyCol key='python' positions={python}/>
        <BodyCol key='csharp' positions={csharp}/>
        <BodyCol key='java' positions={java}/>
        <BodyCol key='php' positions={php}/>
      </section>
    </div>
  );
};

export default TournamentScore;
