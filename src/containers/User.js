import React from 'react';
import styled from 'styled-components';

import Profile from './Profile.js';
import Content from './Content.js';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const Limit = styled.div`
    width: 100%;
	max-width: 975px;
`

export default class User extends React.Component {
    render() {
        return(
            <Container>
                <Limit>
                    <Profile settings={this.props.settings.profile} data={this.props.data.profile}/>
                    <Content settings={this.props.settings.content} data={this.props.data.content}/>
                </Limit>
            </Container>
        )
    }
}