import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

const Logo = ({ box, onSubmitClicked, input }) => {
    
    return (
        <div className = 'ma4 mt0 center'>
        {onSubmitClicked}
            <Tilt className = 'Tilt br2 ba b--white br4 shadow-2 tc pa4' options = {{ max : 30 }} style = {{height: '80%', width: '80%'}} >
                <div className = 'Tilt-inner'>
               
                    <img id = 'inputimage' src = {input} style = {{'height' : '100%', 'width' : '100%'}} alt = 'logo of a face'/>
                </div>
                 <div className = "bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                
            </Tilt>

        </div>
    );
}

export default Logo; 