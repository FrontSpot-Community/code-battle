import React from 'react';
import {TextArea, Input, Select, Checkbox} from 'src/client/components/Common';

import style from './style.scss';

const TaskDetailsEditor = (props) => {
  const {
    name, description, stars, difficulty, language,
    onTaskDifficultyChanges, onTaskStarsChanges,
    onTaskNameChanges, onTaskDescriptionChanges, onTaskLanguageChanges
  } = props;

  return (
    <div className={style.container}>
      <div className={style.form}>
        <div className={style.row}>
          <Input
            className={style.form__label} value={name} label="Title"
            onChange={({target}) => onTaskNameChanges(target.value)}
          />
        </div>
        <div className={style.row}>
          <Select
            className={style.form__label} label="Value"
            onChange={({target}) => onTaskStarsChanges(target.value)}
            value={stars} values={
              [
                {
                  value: '1',
                  text: '★'
                },
                {
                  value: '2',
                  text: '★ ★'
                },
                {
                  value: '3',
                  text: '★ ★ ★'
                },
                {
                  value: '4',
                  text: '★ ★ ★ ★'
                },
                {
                  value: '5',
                  text: '★ ★ ★ ★ ★'
                }
              ]
            }
          />
          <Select
            className={style.form__label} label="Difficult"
            onChange={({target}) => onTaskDifficultyChanges(target.value)}
            value={difficulty} values={
              [
                {
                  value: 'Low',
                  text: 'Low'
                },
                {
                  value: 'Normal',
                  text: 'Normal'
                },
                {
                  value: 'High',
                  text: 'High'
                },
                {
                  value: 'Mortal',
                  text: 'Mortal'
                }
              ]
            }
          />
          <Select
            className={style.form__label} label="Language"
            onChange={({target}) => onTaskLanguageChanges(target.value)}
            value={language} values={
              [
                {
                  value: 'javascript',
                  text: 'javascript'
                },
                {
                  value: 'php',
                  text: 'php'
                },
                {
                  value: 'csharp',
                  text: 'csharp'
                },
                {
                  value: 'java',
                  text: 'java'
                },
                {
                  value: 'python',
                  text: 'python'
                }
              ]
            }
          />
        </div>
        <div className={style.row}>
          <TextArea
            className={style.form__label} label="Description" value={description}
            onChange={({target}) => onTaskDescriptionChanges(target.value)}
          />
        </div>
        <div className={`${style.row}`}>
          <Checkbox text="Send notification to users on changes" />
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsEditor;
