import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    font-weight: bolder;
`

export default class Name extends React.Component {
    render() {
        return(
            <Component className={this.props.className}>
                {this.props.username}
            </Component>
        )
    }
}