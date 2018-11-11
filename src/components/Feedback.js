import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    color: rgb(0, 53, 105);
    font-weight: ${props => props.view === 'link' ? 'bolder' : props.view === 'hashtag' ? 'normal' : 'inherit'};
    text-decoration: none;
`

export default class Feedback extends React.Component {
    render() {
        return(
            <Component view={this.props.view}>
                {this.props.label}
            </Component>
        )
    }
}