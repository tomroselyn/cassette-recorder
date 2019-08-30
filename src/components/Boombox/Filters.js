import React from 'react';
import './Boombox.css';

import Filter1 from '../Buttons/Filter1.js';
import Filter2 from '../Buttons/Filter2.js';
import Filter3 from '../Buttons/Filter3.js';
import Filter4 from '../Buttons/Filter4.js';

const Filters = (props) => {
    return (
        <div className="top-panel-filters">
            <Filter1 />
            <Filter2 />
            <Filter3 />
            <Filter4 />
        </div>
    );
}

export default Filters;