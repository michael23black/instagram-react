import React from 'react';
import styled from 'styled-components';

const Component = styled.a`
    font-weight: bold;
    text-decoration: none; 
    cursor: pointer;
`

export default class Link extends React.Component {
    render() {
        return(
            <Component className={this.props.className} href={this.props.href}>
                {this.props.label}
            </Component>
        )
    }
}