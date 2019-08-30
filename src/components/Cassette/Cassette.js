import React from 'react';
import './Cassette.css';
import Wheel from './Wheel.js';

function Cassette() {
    return (
        <div className="cassette-container">
            <Wheel position="wheel-left" />
            <Wheel position="wheel-right" />
        </div>
    );
}

export default Cassette;