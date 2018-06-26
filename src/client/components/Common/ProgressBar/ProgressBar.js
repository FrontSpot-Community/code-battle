import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

import './progress-bar.scss';

const ProgressBar = () => {
  return (
    <LoadingBar
      className="loading"
      updateTime={20}
      maxProgress={100}
      progressIncrease={20}
    />
  );
};

export default ProgressBar;
