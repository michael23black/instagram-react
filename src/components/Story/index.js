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
        width: 75px;
		height: 75px;
		min-width: 75px;
		min-height: 75px;
    }
`

const SImage = styled.img`
	width: 80px;
	height: 80px;
	box-sizing: border-box;
	padding: 3px;
	border: 1px solid #dbdbdb;
	border-radius: 40px;
    
    @media all and (max-width:600px){
		width: 60px;
		height: 60px;
	}
`

const SLabel = styled.span`
    font-size: 14px;
    font-weight: bold;

    @media all and (max-width:600px){
        font-size: 12px;
    }
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