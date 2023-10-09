import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBaby } from "@fortawesome/free-solid-svg-icons";
import './auth.scss';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailOrMobile: '',
            password: '',
            error: null
        }   
    }

    handleInputChange = (e) => {
        // example of an event(e) is a user typing in an input field
        const { name, value } = e.target;
        // the name corresponds to the name attribute of the input field, and value corresponds to the current value entered by the user in the input field.
        this.setState({
            [name]: value,
            error: null
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { emailOrMobile, password } = this.state;

        if (!emailOrMobile || !password ) {
            this.setState({
                error: 'Please fill in all fields.'
            });
        } else {
            console.log('Form submitted!');
        }
    }
    render() {
        const { emailOrMobile, password, error } = this.state;
        return (
            <div className="auth-block">
                <div className="sub-auth">
                    <div className="main-block">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <button className="google-btn"><FontAwesomeIcon icon={['fab', 'google']} className="google-icon"/>Log in with google</button>
                        <p className="or">_______ or _______</p>
                        
                        <div className="input-group">
                            <FontAwesomeIcon icon={faUser} size="xs" className="icon"/>
                            <label htmlFor="email">Enter your email address</label>
                            <input type="text"
                            id="email"
                            name="emailOrMobile"
                            value={emailOrMobile}
                            onChange={this.handleInputChange}
                             placeholder="Enter your email address" aria-required className="log-text"/>
                        </div>
                        <div className="input-group">
                        <label htmlFor="password">Enter your password</label>
                            <FontAwesomeIcon icon={faBaby} size="xs" className="icon"/>
                            <input type="password" id='password'
                            name="password"
                            value={password}
                            onChange={this.handleInputChange}
                            placeholder="Enter password" aria-required />
                        </div>
                        {error && <div className="error">{error}</div>}
                        <p className="f-pwd">Forgot password?</p>
                        <button type="submit" className="submit-btn">Login</button>
                        <p className="acc">Don't have an account? <span><Link to='/signup' className="sig">Sign up</Link></span>.</p>
                    </form>
                    </div>
                    <div className="welcome-block">
                        <h1>Hello customer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing amet purus dui donec malesuada nunc faucibus. Nascetur adipiscing netus egestas elementum facilisi. Quis eu euismod risus netus eu lectus in suspendisse amet. Dignissim tristique mi id in egestas mauris sollicitudin.</p>
                        <button className='sig-btn'>
                            <Link to='/signup' className="sig-link">Sign Up</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login