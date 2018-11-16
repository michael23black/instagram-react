import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
    font-size: 32px;
    font-weight: lighter; 
    margin-right: 10px;

    @media all and (max-width:600px){
        font-size: 20px;
    } 
`
const Nickname = props => (
    <Box className={props.className}>
        {props.nickname}
    </Box>
);

const propTypes = {
    nickname: PropTypes.string.isRequired
};

Nickname.propTypes = propTypes;
export default Nickname;