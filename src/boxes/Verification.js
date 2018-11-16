import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.img` 
    display: ${props => props.active 
        ? 'block' : 'none'
    };
	margin-right: 20px;
	height: 18px;
	width: 18px;
`

const Verification = props => (
    <Box
        className={props.className}
        active={props.active} 
        src={props.url} 
    />
);

const propTypes = {
    url: PropTypes.string.isRequired,
    active: PropTypes.bool
};

const defaultProps = {
    active: false
};

Verification.propTypes = propTypes;
Verification.defaultProps = defaultProps;
export default Verification;