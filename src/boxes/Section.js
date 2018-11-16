import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Component = styled.a`
    display: ${props => props.have ? 'none' : 'flex'};
    flex-flow: row nowrap;
    align-items: center;
    height: 52px;
    margin-right: 60px;
    text-decoration: none;
    
    ${props => props.active && css`
        border-top: 1px solid #000000;
        margin-top: -1px;
    `};
    
    &:last-child{
        margin-right: 0px;
    }
    
    @media all and (max-width:600px){
        border: none;
        margin: 0px;
    }
    
`
const Image = styled.img`
    display: block;
    width: 12px;
    height: 12px;
    filter: brightness(0%);
    opacity: 0.6;
    
    ${props => props.active && css`
        opacity: 1; 
    `};

    @media all and (max-width:600px){
        width: 24px;
        height: 24px;
        opacity: 1;
        filter: grayscale(0.9);

        ${props => props.active && css`
            filter: grayscale(0); 
        `};
    }
`
const Label =styled.span`
    margin-left: 5px; 
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 2px;

    ${props => props.active && css`
        color: #000;
    `};

    @media all and (max-width:600px){
        display: none;
	}
`

export default class Section extends React.Component {
    render() {
        return(
            <Component have={this.props.have} active={this.props.active} onClick={this.props.onClick} href={this.props.href}>
                <Image active={this.props.active} src={this.props.img}/>
                <Label active={this.props.active}>
                    {this.props.label}
                </Label>
            </Component>
        )
    }
}