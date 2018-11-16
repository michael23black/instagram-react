import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Story from '../boxes/Story.js';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 50px;  
    overflow: hidden;

    @media all and (max-width:600px){
		padding-bottom: 20px;
    }
`

const Stories = props => (
    <Container>
        {props.stories.map(story =>
            <Story 
                label={story.label} 
                url={story.url} 
                href={story.href}
                key={story.id}
            />
        )}
    </Container>
);

const propTypes = {
    stories: PropTypes.array.isRequired
};

Stories.propTypes = propTypes;
export default Stories;