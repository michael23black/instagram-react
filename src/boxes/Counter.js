import React from 'react';
import styled from 'styled-components';

const Component = styled.a`
    display: flex;
    flex-flow: row wrap;
    margin-right: 40px;
    font-size: 16px;

    &:last-child{
        margin-right: 0px;
    }

    @media all and (max-width:600px){
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        margin-right: 0px;
		font-size: 14px;
        color: #9c9c9c;
    }
`
const Label = styled.span`
`
const Count = styled.span`
    margin-right: 0.3em;
    font-weight: bold;
    color: black;
`

export default class Counter extends React.Component {
    render() {
        return(
            <Component>
                <Count>{this.props.count}</Count>
                <Label>{this.props.label}</Label>
            </Component>
        )
    }
}