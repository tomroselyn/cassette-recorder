import React from 'react';
import './Boombox.css';
import Filters from './Filters.js';
import WavDisplay from './WavDisplay.js';

const TopPanel = (props) => {
    return (
        <div className="boombox-top-panel">
            <Filters />
            <WavDisplay />
        </div>
    );
}

export default TopPanel;