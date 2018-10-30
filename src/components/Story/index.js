import React from 'react';
import styled from 'styled-components';

const SStory = styled.a`
    display: flex;
	flex-flow: column nowrap;
	align-items: center;
    justify-content: space-evenly;
    width: 130px;
	height: 130px;
	min-width: 130px;
    min-height: 130px;
    text-decoration: none;
    
    @media all and (max-width:600px){
        width: 85px;
		height: 85px;
		min-width: 85px;
		min-height: 85px;
    }
`

const SImage = styled.img`
    width: 80px;
    height: 80px;
    padding: 3px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 50%;

    @media all and (max-width:600px){
        width: 60px;
        width: 60px;
    }
`

const SLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
`

export default class Story extends React.Component {
    render() {
        return(
            <SStory>
                <SImage src={this.props.url}/>
                <SLabel>{this.props.label}</SLabel>
            </SStory>
        )
    }
}