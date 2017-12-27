import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import c3 from 'c3';

export default class C3Component extends Component {
    graph = null;

    shouldComponentUpdate() {
      return !document.hidden;
    }

    componentDidMount() {
      this.graph = this.drawGraph();
    }

    drawGraph() {
      const {data, config} = this.props;
      const node = ReactDOM.findDOMNode(this);
      return c3.generate({
        data,
        ...config,
        bindto: node
      });
    }

    render() {
      return <div />;
    }
}

C3Component.propTypes = {
  data: PropTypes.object,
  config: PropTypes.object
};
