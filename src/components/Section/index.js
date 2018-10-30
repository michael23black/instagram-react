import React from 'react';
import styled from 'styled-components';

const SSection = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 52px;
    
    :first-child{
        margin-right: 60px;
    }
    @media all and (max-width:600px){
        :first-child{
            margin: 0px;
        }
    }
`
const SImage = styled.img`

`
const SLabel =styled.span`
    margin-left: 5px; 
    font-weight: bold;
    color: #999999;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media all and (max-width:600px){
        display: none;
	}
`

export default class Sections extends React.Component {
    render() {
        return(
            <SSection>
                <SImage></SImage>
                <SLabel>{this.props.label}</SLabel>
            </SSection>
        )
    }
}