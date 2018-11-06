import React from 'react';

const withPageName = (WrappedComponent, pageName) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    static pageName = pageName;

    render() {
      return (
        <WrappedComponent {...this.props}/>
      );
    }
  };
};

export default withPageName;
