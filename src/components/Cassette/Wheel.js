import React from 'react';
import './Cassette.css';

const Wheel = (props) => {
    return (
        <div className={"cassette-wheel " + props.position}></div>
    );
}

export default Wheel;