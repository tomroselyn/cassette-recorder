import React from 'react';
import './Buttons.css';

function sayFilter1() {
    console.log('filter 1 button pushed');
}

function Filter1() {
    return (
        <div className="filterbutton" onClick={sayFilter1}>
        </div>
    );
}

export default Filter1;