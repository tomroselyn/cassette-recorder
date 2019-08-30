import React from 'react';
import './Boombox.css';

import Record from '../Buttons/Record.js';
import Play from '../Buttons/Play.js';
import Rewind from '../Buttons/Rewind.js';
import FastForward from '../Buttons/FastForward.js';
import StopEject from '../Buttons/StopEject.js';
import Pause from '../Buttons/Pause.js';

function BottomPanel() {
    return (
        <div className="boombox-bottom-panel">
            <Record />
            <Play />
            <Rewind />
            <FastForward />
            <StopEject />
            <Pause />
        </div>
    );
}

export default BottomPanel;