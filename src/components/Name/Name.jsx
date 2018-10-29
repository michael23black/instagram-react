import React from 'react';
import styled from 'styled-components';

const SName = styled.div`
    font-weight: bolder;
`

export default class Name extends React.Component {
    render() {
        return(
            <SName>{this.props.username}</SName>
        )
    }
}