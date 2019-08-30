import React from 'react';
import './Buttons.css';

function sayRecord() {
    console.log('record button pushed');
}

function Record() {
    return (
        <div className="button record" onClick={sayRecord}>
        </div>
    );
}

export default Record;