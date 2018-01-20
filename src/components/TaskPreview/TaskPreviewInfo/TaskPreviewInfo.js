import React from 'react';
import parser from 'html-react-parser';

import style from './style.scss';
import lock from './assets/lock.svg';
import {Button} from 'src/components/Common';

const TaskPreviewInfo = (props) => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <Button
          active={props.infoState === 'details'}
          onClick={() => {
            props.onChangeInfoState('details');
          }}
          mod='navigation'
          className={style.button}
        >
          Details
        </Button>
        <Button
          active={props.infoState === 'your-solution'}
          onClick={() => {
            props.onChangeInfoState('your-solution');
          }}
          mod='navigation'
          className={style.button}
        >
          Your solution
        </Button>
        <Button
          active={props.infoState === 'best-solutions'}
          onClick={() => {
            props.onChangeInfoState('best-solutions');
          }}
          mod='navigation'
          className={style.button}
        >
          <img src={lock} className={style.image} width='16px' height='16px' /> Best solutions
        </Button>
      </header>

      <section className={style.textBlock}>
        {props.infoState === 'details' && props.task ? parser(props.task.description) : null}
        {props.infoState === 'your-solution'
          ? <pre className={style.codeBlock}>{props.solution}</pre>
          : null
        }
      </section>

      <section className={style.runButtonsBlock}>
        <Button
          className={style.runButton}
          onClick={() => {
            props.onNextTask();
          }}
          mod='cancel'
        >
          Next Task
        </Button>
        <Button
          className={style.runButton}
          onClick={() => {
            props.onStartTrain();
          }}
          mod='success'
        >
          {props.isSolutionComplete ? 'Check solution' : 'Start train'}

        </Button>
      </section>
    </div>
  );
};

export default TaskPreviewInfo;
