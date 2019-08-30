import React from 'react';
import './Buttons.css';

function sayFilter4() {
    console.log('filter 4 button pushed');
}

function Filter4() {
    return (
        <div className="filterbutton" onClick={sayFilter4}>
        </div>
    );
}

export default Filter4;