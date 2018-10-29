import React from 'react';
import styled from 'styled-components';

const SCheckInLink = styled.a` 
    margin-left: 15px;
	font-size: 15px;
	font-weight: bold;
    color: #3897f0;
    text-decoration: none;
    cursor: pointer;

    @media all and (max-width:600px){
        display: none;
    }
`

export default class CheckInLink extends React.Component {
    render() {
        return(
            <SCheckInLink>{this.props.label}</SCheckInLink>
        )
    }
}