import React from 'react';

const Navigation = ({onRouteChange, userSignedIn}) => {
    
    if(userSignedIn) { 
        return (
        <nav style = {{display: 'flex', justifyContent: 'flex-end', 'marginBottom' : '0.5em'}}>
            <p className = "f3 link dim underline pa3 pointer" onClick ={() => onRouteChange('signout')}>Sign Out</p>
        </nav> 
        );
}
    else {
        return (
        <nav style = {{display: 'flex', justifyContent: 'flex-end', 'marginBottom' : '0.5em'}}>
            <p className = "f3 link dim underline pa3 pointer" onClick ={() => onRouteChange('signin')}>Sign In</p>
            <p className = "f3 link dim underline pa3 pointer" onClick ={() => onRouteChange('register')}>Register</p>
        </nav>
        );
    }
    
}
export default Navigation; 