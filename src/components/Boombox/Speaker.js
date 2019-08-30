import React from 'react';
import './Boombox.css';

const Speaker = (props) => {
    return (
        <div className={"boombox-speaker " + props.position}></div>
    );
}

export default Speaker;