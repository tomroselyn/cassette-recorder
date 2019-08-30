import React from 'react';
import './Buttons.css';

function sayPlay() {
    console.log('play button pushed');
}

function Play() {
    return (
        <div className="button play" onClick={sayPlay}>
        </div>
    );
}

export default Play;