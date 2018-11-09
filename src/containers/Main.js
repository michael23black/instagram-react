import React from 'react';
import styled from 'styled-components';

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
    constructor(props) {
        super(props);
        this.state = {
            scrolled : true
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    } 
    handleScroll() {
        this.setState({scrolled : window.pageYOffset === 0});
    };
    render() {
        return(
            <Container>
                <Header scrolled={!this.state.scrolled}/>
                <Inner>
                    <Profile />
                    <Content />
                </Inner>
                <Footer />
            </Container>
        )
    }
}

export default Main;