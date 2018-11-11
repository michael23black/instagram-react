import React from 'react';
import styled from 'styled-components';


const Component = styled.img` 
    display: ${props => props.active ? 'block' : 'none'};
	margin-right: 20px;
	height: 18px;
	width: 18px;
`

export default class Verification extends React.Component {
    render() {
        return(
            <Component 
                active={this.props.active} 
                src={this.props.url} 
            />
        )
    }
}