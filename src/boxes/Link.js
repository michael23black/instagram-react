import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.a`
    font-weight: bold;
    text-decoration: none; 
    cursor: pointer;
`

const Link = props =>(
    <Box className={props.className} href={props.link}>
        {props.label}
    </Box>
)
const propTypes = {
    link: PropTypes.string,
    label: PropTypes.string.isRequired
};

const defaultProps = {
    link: '#'
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
export default Link;