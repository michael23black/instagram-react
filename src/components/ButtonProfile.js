import React from 'react';
import styled from 'styled-components';

const Component = styled.a`
    font-size: 25px;
    margin: -15px 0px 0px 15px;

    @media all and (max-width:600px){
        margin: -15px 0px 0px -5px;
    }
`

export default class Button extends React.Component {
    render() {
        return(
            <Component className={this.props.className}>
                ...
            </Component>
        )
    }
}