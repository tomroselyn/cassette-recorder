import React from 'react';
import './Boombox.css';

import TopPanel from './TopPanel.js';
import Speaker from './Speaker.js';
import Cassette from '../Cassette/Cassette.js';
import BottomPanel from './BottomPanel';

function BoomboxContainer() {
    return (
        <div>
            <div className="boombox-handle">

            </div>
            <div className="boombox-container">
                <TopPanel />
                <Speaker position="speaker-left" />
                <Cassette />
                <Speaker position="speaker-right" />
                <BottomPanel />
            </div>
        </div>
    );
}

export default BoomboxContainer;