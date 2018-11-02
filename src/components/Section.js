import React from 'react';
import styled from 'styled-components';

const SSection = styled.a`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 52px;
    border-top: ${props => props.active ? '1px solid #000000' : 'none'};
    margin-top: ${props => props.active ? '-1px' : '0px'};
    text-decoration: none;

    &:first-child{
        margin-right: 60px;
    }
    @media all and (max-width:600px){
        border: none;
        &:first-child{
            margin: 0px;
        }
    }
`
const SImage = styled.img`
    display: block;
    width: 12px;
    height: 12px;
    filter: brightness(0%);
    opacity: ${props => props.active ? '1' : '0.6'};

    @media all and (max-width:600px){
        width: 24px;
        height: 24px;
        opacity: 1;
        filter: ${props => props.active ? 'grayscale(0)' : 'grayscale(0.9)'};
    }
`
const SLabel =styled.span`
    margin-left: 5px; 
    font-weight: bold;
    color: ${props => props.active ? '#000000' : '#999999'};
    text-transform: uppercase;
    letter-spacing: 2px;

    @media all and (max-width:600px){
        display: none;
	}
`

export default class Section extends React.Component {
    render() {
        return(
            <SSection active={this.props.active} href={this.props.href}>
                <SImage active={this.props.active} src={this.props.img}/>
                <SLabel active={this.props.active}>{this.props.label}</SLabel>
            </SSection>
        )
    }
}