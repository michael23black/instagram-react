import React from 'react';
import styled from 'styled-components';

const Box = styled.span`
    height: 28px;
    margin: 0px 16px;
    border-left: 1px solid #000000;
`

const Separator = props => (
    <Box className={props.className} />
)

export default Separator;
