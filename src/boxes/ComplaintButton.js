import React from 'react';
import styled from 'styled-components';

const Box = styled.button`
    font-size: 25px;
    padding: 0px 0px 15px 15px;
    border: none;
    background-color: initial;
    cursor: pointer;

    @media all and (max-width:600px){
        padding: 0px 0px 15px 0px;
    }
`

const Button = props => (
    <Box className={props.className}>
        ...
    </Box>
);

export default Button;