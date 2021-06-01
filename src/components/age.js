import React from 'react';
import PropTypes from 'prop-types'


function Age(props) {
    return <h1 style={{font: 'icon',}}> 
    {props.desc} {props.num}</h1>;
    }

Age.PropTypes = {
    num: PropTypes.number,
};

Age.defaultProps = {
    num: 26
};

export default Age;