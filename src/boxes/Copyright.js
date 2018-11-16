import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.span`
    font-weight: bold;
	color: #999;
    text-transform: uppercase;
`
const Copyright = props => (
    <Box className={props.className}>
        {props.label}
    </Box>
);

const propTypes = {
    label: PropTypes.string.isRequired
};

Copyright.propTypes = propTypes;
export default Copyright;