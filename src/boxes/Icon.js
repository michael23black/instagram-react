import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.img`
    height: 24px;
    width: 24px; 
`

const Icon = props => (
    <Box 
        className={props.className} 
        src={props.url}
    />
);

const propTypes = {
    url: PropTypes.string.isRequired
};

Icon.propTypes = propTypes;
export default Icon;
