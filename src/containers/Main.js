import React from 'react';
import styled from 'styled-components';
import {withSize} from 'react-sizeme';

import Header from './Header.js';
import Content from './Content.js';
import Profile from './Profile.js';
import Footer from './Footer.js';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
`
const Inner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 975px;
`

class Main extends React.Component {
    state = {
        top: true
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    } 
    handleScroll = () => {
        this.setState({top : window.pageYOffset === 0});
    };
    render() {
        const {width} = this.props.size;
        return(
            <Container>
                <Header top={!this.state.top}/>
                <Inner>
                    <Profile />
                    <Content />
                </Inner>
                <Footer />
            </Container>
        )
    }
}

export default withSize()(Main);