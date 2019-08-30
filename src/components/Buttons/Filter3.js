import React from 'react';
import './Buttons.css';

function sayFilter3() {
    console.log('filter 3 button pushed');
}

function Filter3() {
    return (
        <div className="filterbutton" onClick={sayFilter3}>
        </div>
    );
}

export default Filter3;