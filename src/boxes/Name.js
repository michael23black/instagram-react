import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
    font-weight: bolder;
`
const Name = props => (
    <Box className={props.className}>
        {props.username}
    </Box>
)

const propTypes = {
    username: PropTypes.string.isRequired
};

Name.propTypes = propTypes;
export default Name;