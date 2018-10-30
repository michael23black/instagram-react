import React from 'react';
import styled from 'styled-components';

const SCopyright = styled.div`
    font-weight: bold;
	color: #999999;
    text-transform: uppercase;
    @media all and (max-width:600px){
        text-align: center;
    }
`

export default class Copyright extends React.Component {
    render() {
        return(
            <SCopyright>{this.props.label}</SCopyright>
        )
    }
}