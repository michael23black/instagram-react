import React from 'react';
import styled from 'styled-components';

import Profile from './Profile.js';
import Content from './Content.js';

const Container = styled.div`
`

export default class User extends React.Component {
    render() {
        return(
            <Container>
                    <Profile settings={this.props.settings.profile} data={this.props.data.profile}/>
                    <Content settings={this.props.settings.content} data={this.props.data.content}/>
            </Container>
        )
    }
}