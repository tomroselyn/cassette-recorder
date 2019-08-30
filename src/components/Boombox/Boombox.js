import React from 'react';
import './Boombox.css';

import TopPanel from './TopPanel.js';
import Speaker from './Speaker.js';

function BoomboxContainer() {
    return (
        <div>
            <div className="boombox-handle">
                
            </div>
            <div className="boombox-container">
                <TopPanel />
                <Speaker position="speaker-left" />
                <p>cassette</p>
                <Speaker position="speaker-right" />
                <p>cassette buttons</p>
            </div>
        </div>
    );
}

export default BoomboxContainer;