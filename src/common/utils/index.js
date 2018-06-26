import React from 'react';

const addNewLineCharacter = (text) => {
  return text.split('\n').map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br/>
      </span>
    );
  });
};

export {
  addNewLineCharacter
};
