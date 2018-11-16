import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
`

export default class Description extends React.Component {
    render() {
        return(
            <Component className={this.props.className}>
                {this.props.text}
            </Component>
        )
    }
}