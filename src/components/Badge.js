import React from 'react';
import styled from 'styled-components';


const Component = styled.img`
    height: 24px;
    width: 24px; 
`


export default class Badge extends React.Component {
    render() {
        return(
            <Component className={this.props.className} src={this.props.url}/>
        )
    }
}
