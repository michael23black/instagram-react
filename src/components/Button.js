import React from 'react';
import styled from 'styled-components';

const Component = styled.a`
    padding: 5px 9px;
    border: 1px solid #3897f0;
    border-radius: 5px;
    background-color: #3897f0;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
`

export default class Button extends React.Component {
    render() {
        return(
            <Component className={this.props.className}>
                {this.props.label}
            </Component>
        )
    }
}