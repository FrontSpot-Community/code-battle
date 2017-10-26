import React from 'react';
import {Button} from 'react-bootstrap';
const url = 'https://github.com/login/oauth/authorize?client_id=0cebe6182174a9aab2d0&client_secret=0cebe6182174a9aab2d0';

export default class GitHubLogin extends React.Component {
    clickHandler = () => {
        const githubWindow = window.open(
            url,
            '_parent', 'width=420,height=230,resizable,scrollbars=yes,status=1'
        );
        githubWindow.onload = function() {
            alert();
        };
    };

    render() {
        return (
            <div>
                <Button bsStyle="primary"
                        onClick={this.clickHandler}>Github Login
                </Button>
                <br/>
                <span> <a href={url}> GitHub</a></span>
            </div>
        );
    }
}
