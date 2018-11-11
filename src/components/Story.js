import React from 'react';
import styled from 'styled-components';

const Component = styled.a`
    display: flex;
	flex-flow: column nowrap;
	align-items: center;
    justify-content: space-evenly;
    width: 130px;
	height: 130px;
	min-width: 130px;
    min-height: 130px;
    margin-left: 5px;
    text-decoration: none;
    
    @media all and (max-width:600px){
        width: 75px;
		height: 75px;
		min-width: 75px;
		min-height: 75px;
    }
`

const Image = styled.img`
	width: 80px;
	height: 80px;
	box-sizing: border-box;
	padding: 3px;
	border: 1px solid #dbdbdb;
	border-radius: 40px;
    
    @media all and (max-width:600px){
		width: 65px;
		height: 65px;
        padding: 2px;
	}
`

const Label = styled.span`
    font-size: 14px;
    font-weight: bold;

    @media all and (max-width:600px){
        font-size: 12px;
        font-weight: normal;
    }
`

export default class Story extends React.Component {
    render() {
        return(
            <Component href={this.props.href}>
                <Image src={this.props.url}/>
                <Label>{this.props.label}</Label>
            </Component>
        )
    }
}