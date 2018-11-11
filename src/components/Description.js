import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`

export default class Description extends React.Component {
    render() {
        return(
            <Container className={this.props.className}>
                {this.props.text}
            </Container>
        )
    }
}