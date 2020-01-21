import React from 'react';

const SignIn = ({ onRouteChange}) => {
    return (
    <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="ba bw1 pa4 black-80" style={{'borderRadius' : '25px'}}>
            <form className="measure">
                <fieldset id="sign-in" className="ba b--transparent ph0 mh0 tc">
                <legend className="f1 fw6 ph0 mh0 tc">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick = {() => onRouteChange('home')} />
                </div>

                <div className = "1h-copy mt3">
                    <p onClick = {() => onRouteChange('register')} href = "#0" className = "f6 link dim black db">Register</p>
                </div>
                </fieldset>
                
            </form>
            </main>
            </article>

        
    );
}
export default SignIn;