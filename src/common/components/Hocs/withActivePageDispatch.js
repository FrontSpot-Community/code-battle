import React from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import {activePageChange} from 'common/actions/actionCreators/activePageActionCreator';

const withActivePageDispatch = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      setTimeout(() => {
        this.props.activePageChange(WrappedComponent.pageName);
      }, 0);
    }

    render() {
      return (
        <WrappedComponent {...this.props}/>
      );
    }
  };
};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({activePageChange}, dispatch);
};

const composedWithActivePageDispatch = compose(
  connect(null, mapActionsToProps),
  withActivePageDispatch
);
export default composedWithActivePageDispatch;
