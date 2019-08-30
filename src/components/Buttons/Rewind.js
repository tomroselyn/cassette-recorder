import React from 'react';
import './Buttons.css';

function sayRewind() {
    console.log('rewind button pushed');
}

function Rewind() {
    return (
        <div className="button rewind" onClick={sayRewind}>
        </div>
    );
}

export default Rewind;