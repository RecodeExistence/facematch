import React from 'react'; 
import './ImageLinkForm.css';
import Camera from './vintagecamera.png';

const ImageLinkForm = () => {
    return (
        <div className = "image-link-container">
            <p className = "f3 tc" style = {{'font-size': '2em', 'font-family': 'wild river'}}>
                {'Supply a picture and find a face!'}
            </p>
        
            <div className = 'pa4 br2 shadow-5 input-container center'>
                <input className = "f4 pa2 w-70" type = "text" placeholder = "Paste Image Url Here..." />
                <img className = "tc w-30 grow f4 link ph3 pv2 dib white cameraButton" src = { Camera } alt = "A vintage camera in place of a button"  onClick = {() => document.querySelector('.Tilt').setAttribute('id', 'clicked')}/>
            </div>
        </div>  
    );
}

export default ImageLinkForm; 