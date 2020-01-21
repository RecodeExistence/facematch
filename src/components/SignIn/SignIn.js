import React from 'react'
const SignIn = () => {
    return (
    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main className="ba bw1 pa4 black-80" style={{color:'white', 'borderRadius' : '25px'}}>
            <form className="measure">
                <fieldset id="sign-in" className="ba b--transparent ph0 mh0 tc">
                <legend className="f4 fw6 ph0 mh0 tc">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                </div>
                </fieldset>
                
            </form>
            </main>
            </article>

        
    );
}
export default SignIn;