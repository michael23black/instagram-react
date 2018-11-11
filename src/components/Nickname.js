import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    font-size: 32px;
    font-weight: lighter; 
    margin-right: 10px;

    @media all and (max-width:600px){
        font-size: 20px;
    } 
`
export default class Nickname extends React.Component {
    render() {
        return(
            <Component className={this.props.className}>
                {this.props.nickname}
            </Component>
        )
    }
}