import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = ({ onSubmitClicked, input }) => {
    
    return (
        <div className = 'ma4 mt0 center'>
        {onSubmitClicked}
            <Tilt className = 'Tilt br2 ba b--white br4 shadow-2 tc pa4' options = {{ max : 30 }} style = {{height: '80%', width: '80%'}} >
                <div className = 'Tilt-inner'>
                    <img src = {input} alt = 'logo of a face'/>
                </div>
            </Tilt>

        </div>
    );
}

export default Logo; 