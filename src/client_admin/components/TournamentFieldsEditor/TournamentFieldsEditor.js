import React from 'react';

import {
  TextArea, Input, Select, Checkbox, DatePicker, TileInput
} from 'src/client/components/Common';

import style from './style.scss';


export default class TournamentFieldsEditor extends React.Component {
  render() {
    const {
      name, startDate, endDate, language, description, tags, difficulty, author,
      onTitleChanges, onStartDateChanges, onEndDateChanges, onDifficultyChanges,
      onLanguageChanges, onAuthorNameChanges, onTaskDescriptionChanges,
      onTagsListChanges
    } = this.props;

    return (
      <div className={style.container}>
        <div className={style.form}>
          <div className={style.row}>
            <Input
              className={style.form__label} value={name} label="Title"
              onChange={({target}) => onTitleChanges(target.value)}
            />
          </div>
          <div className={style.row}>
            <div className={style.row__second}>
              <DatePicker
                className={style.form__label} value={startDate} label="Start Date"
                onChange={({target}) => onStartDateChanges(target.value)}
              />
              <DatePicker
                className={style.form__label} value={endDate} label="End Date"
                onChange={({target}) => onEndDateChanges(target.value)}
              />
            </div>
            <div className={style.row__second}>
              <Select
                className={style.form__label} label="Difficulty"
                onChange={({target}) => onDifficultyChanges(target.value)}
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
            </div>
          </div>
          <div className={style.row}>
            <Select
              className={style.form__label} label="Language"
              onChange={({target}) => onLanguageChanges(target.value)}
              value={language} values={
                [
                  {
                    value: 'javascript',
                    text: 'JavaScript'
                  },
                  {
                    value: 'php',
                    text: 'PHP'
                  }
                ]
              }
            />
            <Input
              className={style.form__label} value={author} label="Created by"
              onChange={({target}) => onAuthorNameChanges(target.value)}
            />
          </div>
          <div className={style.row}>
            <TextArea
              value={description} label="Description" className={style.form__label__textarea}
              onChange={({target}) => onTaskDescriptionChanges(target.value)}
            />
          </div>
          <div className={style.row}>
            <TileInput
              className={style.form__label} label="Tags" tiles={tags}
              onChange={(newTagsList) => onTagsListChanges(newTagsList)}
            ></TileInput>
          </div>
          <div className={`${style.row}`}>
            <Checkbox text="Send notification to users on changes" />
          </div>
        </div>
      </div>
    );
  }
}

