import React, { Component } from "react";
import { Link } from "react-router-dom";
import './auth.scss'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: false,
            errorPwd: '',
            fontColor: 'white',
            emailError: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }
        // Add form input change handlers and submit handler here
        handleInputChange = (event) => {
            const { name, value, checked, type } = event.target;
            this.setState({
            [name]: type === 'checkbox' ? checked : value,
            emailError: name === 'email' && !this.validateEmail(value) ? 'Valid email required' : ''
            });
        };

        validateEmail = (email) => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        };

        handlePassword = (event) => {
            const passwd = event.target.value;
            this.setState({password: passwd});
            let fontColor = 'white';
      
            const lowercase = /[a-z]/g;
            const uppercase = /[A-Z]/g;
            const numbers = /[0-9]/g;
            
            if (!passwd.match(lowercase) || !passwd.match(uppercase) || 
              !passwd.match(numbers) || passwd.length < 10) {
            fontColor = 'red';  // Change font color to red for weak passwords
            } else {
              fontColor = 'green';  // Change font color to green for strong passwords
            }
      
            if (!passwd.match(lowercase)) {
              this.setState({errorPwd: 'Password should contain lowercase letters!', fontColor});
              fontColor = 'red';
            } else if (!passwd.match(uppercase)) {
              this.setState({errorPwd: 'Password should contain uppercase letters!', fontColor});
         
            } else if (!passwd.match(numbers)) {
              this.setState({errorPwd: 'Password should contain numbers!', fontColor});
      
            } else if (passwd.length < 10) {
              this.setState({errorPwd: 'Password length should be more than 10', fontColor});
      
            } else {
              this.setState({errorPwd: "Password is strong!", fontColor});
            }
            
        }

        handleConfirmPassword = (event) => {
            const confirmPassword = event.target.value;
            const { password } = this.state;
            let confirmPwdError = '';
      
            if (confirmPassword !== password) {
              confirmPwdError = 'Passwords do not match.';
            }
      
            this.setState({ confirmPassword, confirmPwdError});
        }

        handleSubmit = (event) => {
            event.preventDefault(); // prevents the app from reloading when the submit button is clicked
            const { firstname, lastname, email, password } = this.state;
          
            // Validate email
            const isEmailValid = this.validateEmail(email);
          
            this.setState({
              emailError: isEmailValid ? '' : 'Valid email required!'
            });
          
            if (firstname === '' || lastname === '' || email === '' || password === '' || !isEmailValid) {
              this.setState({
                error: true
              });
            } else {
              this.setState({
                // submitted: true,
                error: false
              })
            };  
          
    };


    render() {
        const { firstname, lastname, email, password, fontColor, confirmPwdError, emailError, errorPwd } = this.state;
        return (
            <div className="auth-block">
                <div className="sub-auth reverse">
                    <div className="main-block">
                    <h1>Create an Account</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="firstname" placeholder="Enter Firstname"
                        value={firstname} onChange={this.handleInputChange} aria-required className="sign-text"/>

                        <input type="text" name="lastname" placeholder="Enter Lastname" className="sign-text" 
                        value={lastname} onChange={this.handleInputChange}/><br />

                        <input type="email" name='email' placeholder="Enter Email address" aria-required
                        value={email} onChange={this.handleInputChange} required/><br />
                        {emailError && <span className="error">{emailError}</span>}
                        
                        <input type="number" name="phoneNumber" placeholder="Enter your mobile number" /><br />
                        <input type="password" name="password" placeholder="Enter password"
                        value={password} onChange={this.handlePassword} aria-required/><br />
                        <span className='small' style={{ color: fontColor }} >{errorPwd}</span>

                        <input type="password" name="confirmPassword" placeholder="Confirm password" aria-required
                        value={this.state.confirmPassword} onChange={this.handleConfirmPassword}/><br />
                        {confirmPwdError && <span className='error'> {confirmPwdError}</span>}

                        
                        <button type="submit" className="submit-btn">Sign Up</button>
                        <p className="acc">If you already have an account <span ><Link to='/login' className="sig">Log In</Link></span>.</p>
                    </form>
                    </div>
                    <div className="welcome-block">
                        <h1>Welcome to doodah</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing amet purus dui donec malesuada nunc faucibus. Nascetur adipiscing netus egestas elementum facilisi. Quis eu euismod risus netus eu lectus in suspendisse amet. Dignissim tristique mi id in egestas mauris sollicitudin.</p>
                        <button type="submit" className='log-btn'>
                            <Link to='/login' className="log-link">Log In</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default SignUp;