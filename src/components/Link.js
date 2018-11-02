import React from 'react';
import styled from 'styled-components';

const SAboutUsLink = styled.a`
    margin: 0px 15px 10px 0px;
    font-weight: bold;
    color: #003572;
    text-transform: uppercase;
    text-decoration: none; 
    cursor: pointer;
    
`

export default class AboutUsLink extends React.Component {
    render() {
        return(
            <SAboutUsLink href={this.props.href}>{this.props.label}</SAboutUsLink>
        )
    }
}