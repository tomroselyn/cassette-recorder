import React from 'react';
import './Buttons.css';

function sayFilter2() {
    console.log('filter 2 button pushed');
}

function Filter2() {
    return (
        <div className="filterbutton" onClick={sayFilter2}>
        </div>
    );
}

export default Filter2;