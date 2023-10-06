import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <h1>Create an Account</h1>
            <form>
                <input type="text" name="firstname" placeholder="Enter Firstname" />
                <input type="text" name="lastnamae" placeholder="Enter Lastname" />
                <input type="email" name='email' placeholder="Enter Email address" />
                <input type="password" name="password" placeholder="Enter password" />
                <input type="number" name="phoneNumber" placeholder="Enter your mobile number" />
                <button type="submit">Sign Up</button>
                <p>If you already have an account <span><Link to='/login'>Log In</Link></span></p>


            </form>
        </div>
    )
}

export default SignUp;