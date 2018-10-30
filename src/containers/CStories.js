import React from 'react';
import styled from 'styled-components';

import Story from '../components/Story/';

const SCStories = styled.div`
	display: flex;
    flex-direction: row;
    padding-bottom: 50px;  
    overflow-x: hidden;

    @media all and (max-width:600px){
        margin: 0px -10px 0px -10px;
		padding-bottom: 20px;
    }
`
const stories = [
    {url: '/images/story/1.jpg', label: 'The Shop' },
    {url: '/images/story/2.jpg', label: 'BLR' },
    {url: '/images/story/3.jpg', label: 'Genius Re...' },
    {url: '/images/story/4.jpg', label: 'Food Porn' },
];

export default class CStories extends React.Component {
    render() {
        return(
            <SCStories>
                {stories.map((story, i) =><Story label={story.label} url={story.url} key={i}/>)}
            </SCStories>
        )
    }
} 