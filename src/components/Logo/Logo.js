import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import facelogo from './facelogo.png'; 

const Logo = () => {
    return (
        <div className = 'ma4 mt0'>
            <Tilt className = 'Tilt br2 ba b--white br4 shadow-2 tc pa4' options = {{ max : 30 }} style = {{height: '150px', width: '150px'}} >
                <div className = 'Tilt-inner'>
                    <img src = {facelogo} alt = 'logo of a face'/>
                </div>
            </Tilt>

        </div>
    );
}

export default Logo; 