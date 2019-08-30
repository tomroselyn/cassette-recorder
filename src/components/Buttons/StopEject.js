import React from 'react';
import './Buttons.css';

function sayStopEject() {
    console.log('stop eject button pushed');
}

function StopEject() {
    return (
        <div className="button stopeject" onClick={sayStopEject}>
        </div>
    );
}

export default StopEject;