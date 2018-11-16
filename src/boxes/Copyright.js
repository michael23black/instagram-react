import React from 'react';
import styled from 'styled-components';

const Component = styled.span`
    font-weight: bold;
	color: #999;
    text-transform: uppercase;
`
export default class Copyright extends React.Component {
    render() {
        return(
            <Component className={this.props.className}>
                {this.props.label}
            </Component>
        )
    }
}