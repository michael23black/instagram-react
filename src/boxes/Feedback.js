import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.a`
    display: block;
    color: rgb(0, 53, 105);
    font-weight: ${props => props.view === 'link' 
        ? 'bolder' : props.view === 'hashtag' 
        ? 'normal' : 'inherit'};
    text-decoration: none;
`

const Feedback = props => (
    <Box 
        className={props.className}
        href={props.link}
        view={props.view}
    >
        {props.label}
    </Box>
);

const propTypes = {
    link: PropTypes.string,
    label: PropTypes.string.isRequired,
    view: PropTypes.string
};

const defaultProps = {
    link: '#',
    view: 'hashtag'
};

Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
export default Feedback;