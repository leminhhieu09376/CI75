import React, { Component } from "react";
import "./StatefylComponent.css"

export default class StatefylComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClick: false,
        }
        this.username = "Minh Hiu"
    }
    onClick = () => {
        this.setState({
            isClick: true,
        })
    }
    unClick = () => {
        this.setState({
            isClick: false,
        })
    }
    logout = () => {
        this.setState({
            value: 0,
        })
    }

    login = () => {
        this.setState({
            value: 1,
        })
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.isClick ? <p id="hello" onClick={this.unClick}>Hello {this.username}</p> : <button onClick={this.onClick}>Click me</button>}
                </div>
                <div>
                    {this.state.value == 1 ? (
                        <div>
                            <p>Hello {this.username}</p>
                            <button onClick={this.logout}>Log out</button>
                        </div>
                    ) : (<button onClick={this.login}>Click me</button>)}

                </div>

            </div>

        )
    }
}