import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Feedback from '../boxes/Feedback.js';
import Name from '../boxes/Name.js';

const Container = styled.div`
    font-size: 16px;
	line-height: 1.5;

    @media all and (max-width:600px){
		font-size: 14px;
        margin: 0px 15px 20px 15px;
    }
`

const Descriptions = props => (
    <Container>
        <Name username={props.username}/>
        {props.text}
        {props.feedback.map(link =>
            <Feedback 
                label={link.label}
                view={link.view}
                key={link.id}
            />
        )}
    </Container>
);

const propTypes = {
    feedback: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

Descriptions.propTypes = propTypes;
export default Descriptions;