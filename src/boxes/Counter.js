import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.span`
    display: flex;
    flex-flow: row wrap;
    margin-right: 40px;
    font-size: 16px;

    &:last-child{
        margin-right: 0px;
    }

    @media all and (max-width:600px){
        flex-flow: column nowrap;
        align-items: center;
        margin-right: 0px;
		font-size: 14px;
        color: #9c9c9c;
    }
`
const Count = styled.span`
    margin-right: 0.3em;
    font-weight: bold;
    color: black;
`
const Label = styled.span`
`

const Counter = props => (
    <Box className={props.className}>
        <Count>
            {props.count}
        </Count>
        <Label>
            {props.label}
        </Label>
    </Box>
);

const propTypes = {
    count: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

Counter.propTypes = propTypes;
export default Counter;