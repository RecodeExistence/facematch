import React from 'react'; 
import './ImageLinkForm.css';
import Camera from './vintagecamera.png';

const ImageLinkForm = () => {
    return (
        <div>
            <p className = "f3 tc">
                {'Face Recognition tool;  Supply a picture and find a face!'}
            </p>
        
        <div className = 'center'>
            <div className = 'pa4 br2 shadow-5 input-container'>
                <input className = "f4 pa2 w-70" type = "text" />
                <img className = "tc w-30 grow f4 link ph3 pv2 dib white cameraButton" src = { Camera } alt = "A vintage camera image in place of a button"  onClick = {() => console.log('clicked')}/>
            </div>
        </div>
        </div>  
    );
}

export default ImageLinkForm; 