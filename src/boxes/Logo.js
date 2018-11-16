import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box =styled.div`
    margin-top: 7px;
`
const Image = styled.img`
    height: 29px;
    width: 103px;
`

const Logo = props => (
    <Box className={props.className}>
        <Image src={props.url} />
    </Box>
)

const propTypes = {
    url: PropTypes.string.isRequired
};

Logo.propTypes = propTypes;
export default Logo;