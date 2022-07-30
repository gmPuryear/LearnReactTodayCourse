import React, { Component } from 'react'

// CLASS COMPONENT
export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount
        }
    }
    render() { // Need this render function to render the JSX
        return (
            <div>
                <button onClick={() => this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.changeCount(1)}>+</button>
            </div>
        )
    }
    changeCount(amount) {
        this.setState(prevState => {
            return { count: prevState.count + amount }
        })
    }
}