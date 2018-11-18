import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Story from '../boxes/Story.js';

const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    padding-bottom: 50px; 

    @media all and (max-width:600px){
		padding-bottom: 20px;
    }
`
const Inner = styled.div`
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
`
const Button = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    background: url('/images/service/scroll.png') no-repeat 50% 50%;
    filter: opacity(0.3);
    transition: filter 0.2s linear;

    &:hover {
        filter: opacity(1);
    }
`
const ButtonScrollLeft = styled(Button)`
    display: ${props => props.active ? 'none' : 'block'};
    left: 0px;
    
    @media all and (max-width:600px){
        left: 5px;
    }
`
const ButtonScrollRight = styled(Button)`
    display: ${props => props.active ? 'none' : 'block'};
    right: 0px;
    transform: rotate(180deg);

    @media all and (max-width:600px){
        right: 5px;
    }
`

class Stories extends React.Component{
    defaultValue() {
        this.storyBlock.scrollLeft = 0;
        if(this.storyBlock.scrollWidth > this.storyBlock.clientWidth){
            this.setState({
                rightPosition: false
            });
        }
    };
    state = {
        leftPosition: true,
        rightPosition: true
    };
    componentDidMount(){
        this.defaultValue();
    };
    clickScrollLeft = () => {
        this.setState({
            rightPosition: false
        });
        const scrollValue = this.storyBlock.scrollLeft - this.storyBlock.clientWidth / 2;
        this.storyBlock.scrollLeft = scrollValue < 0 ? 0 : scrollValue;
        if (scrollValue <= 0){
            this.setState({
                leftPosition: true
            });
        }
    };
    clickScrollRight = () => {
        this.setState({
            leftPosition: false
        });
        const scrollValue = this.storyBlock.scrollLeft + this.storyBlock.clientWidth / 2;
        this.storyBlock.scrollLeft = scrollValue;
        if (scrollValue >= this.storyBlock.scrollWidth-this.storyBlock.clientWidth){
            this.setState({
                rightPosition: true
            });
        }      
    };
    render() {
        return(
            <Container>
                <ButtonScrollLeft 
                    onClick={this.clickScrollLeft} 
                    active={this.state.leftPosition} 
                />
                <Inner ref={(block) => {this.storyBlock = block;}}>
                    {this.props.stories.map(story =>
                        <Story 
                            label={story.label} 
                            url={story.url} 
                            link={story.link}
                            key={story.id}
                        />
                    )}  
                </Inner>
                <ButtonScrollRight 
                    onClick={this.clickScrollRight} 
                    active={this.state.rightPosition} 
                />
            </Container>    
        )
    }
}

const propTypes = {
    stories: PropTypes.array.isRequired
};

Stories.propTypes = propTypes;
export default Stories;