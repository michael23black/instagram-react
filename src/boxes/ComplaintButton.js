import React from 'react';
import styled from 'styled-components';

const Box = styled.span`
    margin: -15px 0px 0px 15px;
    font-size: 25px;
    cursor: pointer;

    @media all and (max-width:600px){
        margin: -15px 0px 0px -5px;
    }
`

const Button = props => (
    <Box className={props.className}>
        ...
    </Box>
);

export default Button;