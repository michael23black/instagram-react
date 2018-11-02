import React from 'react';
import styled from 'styled-components';

const Component = styled.span`
    height: 28px;
    margin: 0px 16px;
    border-left: 1px solid #000000;
`

export default class Separator extends React.Component {
    render() {
        return(
            <Component className={this.props.className}>
            </Component>
        )
    }
}
