import React from "react";
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <button>Log in with google</button>
                <p>or</p>
                <input type="text" placeholder="Enter your email or mobile number" aria-required />
                <input type="password" placeholder="Enter password" aria-required />
                <p>Forgot password?</p>
                <button>Login</button>
                <p>Don't have an account? <span><Link to='/signup'>Sign up</Link></span></p>
            </form>
        </div>
    )
}

export default Login;