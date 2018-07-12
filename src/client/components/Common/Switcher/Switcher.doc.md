#### Switcher component:


```jsx
class SwitcherDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    }

    onChangeHandler() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return(
            <Switcher checked={this.state.checked} 
                      onChange={this.onChangeHandler.bind(this)} />
        )
    }
}

<SwitcherDemo />; 
```