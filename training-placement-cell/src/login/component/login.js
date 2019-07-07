import React, { Component } from 'react'

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputUser: {
                name:"",
                password:"",
            },
            inputError: {
                isActive:false,
                messages : [],
            }
        }
    }

    handleChange = (event) => {
        const nodeName = event.target.name;
        this.setState({
                inputUser:{
                    ...this.state.inputUser,
                    [nodeName] : event.target.value,
                }
            });
    }

    handleSubmit =() => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                Name: <input type="text" name="name" value={this.state.inputUser.name} onChange={this.handleChange}/> <br/>
                Password: <input type="password" name="password" value={this.state.inputUser.password} onChange={this.handleChange}/><br/>
                <button onClick={this.handleSubmit}>Login</button>
            </div>
        )
        }
    }

    export default LoginPage;
