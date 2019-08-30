import React from 'react';
import './Buttons.css';

function sayFastForward() {
    console.log('fast forward button pushed');
}

function FastForward() {
    return (
        <div className="button fastforward" onClick={sayFastForward}>
        </div>
    );
}

export default FastForward;