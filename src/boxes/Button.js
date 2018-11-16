import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.button`
    display: flex;
    justify-content: center;
    padding: 5px 9px;
    border: 1px solid #3897f0;
    border-radius: 5px;
    background-color: #3897f0;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
`

const Button = props => (
    <Box className={props.className}>
        {props.label}
    </Box>
);

const propTypes = {
    label: PropTypes.string.isRequired
};


Button.propTypes = propTypes;
export default Button;