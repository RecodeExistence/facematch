import React from 'react';
import './SignIn.css'; 

const SignIn = () => {
    return (
        <div className = 'signInForm tc'>

            <form>
                <label htmlFor="email">Email:</label>
                <input type = "text" name = "email"></input>

                <label htmlFor="password">Password:</label>
                <input type = "text" name = "email"></input>

                <input type = "button" value = "Sign In"></input>
            </form>
        </div>
        )
}

export default SignIn;