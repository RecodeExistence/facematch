import React from 'react';

const FaceRecog = ({ imageUrl }) => {
    return (
        <div className = 'center'>
            <img src = {imageUrl} style = {{'height': '200px', 'width': '200px'}} alt = '' />
        </div>
    );
}

export default FaceRecog;

