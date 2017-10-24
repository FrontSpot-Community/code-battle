import React from 'react';
import {Link} from 'react-router-dom';

export class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About</Link> </li>
                </ul>

                {this.props.children}
            </div>);
    }
}
