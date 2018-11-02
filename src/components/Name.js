import React from 'react';
import styled from 'styled-components';

const SName = styled.div`
    font-weight: bolder;
`
const SNickname = styled.div`
    font-size: 32px;
    font-weight: lighter; 
    margin-right: 5px;

    @media all and (max-width:600px){
        font-size: 20px;
    } 
`
export default class Name extends React.Component {
    render() {
        return(
            <SName>{this.props.username}</SName>
        )
    }
}