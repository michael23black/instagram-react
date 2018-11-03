import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    height: 28px;
	width: 100%;
	box-sizing: border-box;
	background-color: #fafafa;
	border: 1px solid #dbdbdb;
	border-radius: 5px;
	cursor: text;
`

export default class Input extends React.Component {
    render() {
        return(
            <Component className={this.props.className}>
            </Component>
        )
    }
}