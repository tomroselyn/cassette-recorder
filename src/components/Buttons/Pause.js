import React from 'react';
import './Buttons.css';

function sayPause() {
    console.log('pause button pushed');
}

function Pause() {
    return (
        <div className="button pause" onClick={sayPause}>
        </div>
    );
}

export default Pause;