import React from 'react';
import styled from 'styled-components';

import Header from './Header.js';
import User from './User.js';
import Footer from './Footer.js';

const Container = styled.div`
`

export default class Main extends React.Component {
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
                <Header scrolled={!this.state.scrolled} settings={settings.header} data={data.header}/>
                <User settings={settings.user} data={data.user}/>
                <Footer settings={settings.footer}/>
            </Container>
        )
    }
}



const data = {
    user : {
        profile : {

        },
        content : {

        }
    }
};

const settings = {
    header : {
        badge : {url : '/images/service/badge.png'},
        logo : {url : '/images/service/logo.png'},
        input : {},
        button : {label : 'Войти'},
        link : {label : 'Зарегистрироваться'}
    }, 
    user : {
        profile : {

        },
        content : {
            section : [
                {},
                {}
            ],
            all : []
        }
    }, 
    footer : {
        links : [
            {label : 'о нас', href : '#'},
            {label : 'поддержка', href : '#'},
            {label : 'пресса', href : '#'},
            {label : 'api', href : '#'},
            {label : 'вакансии', href : '#'},
            {label : 'конфеденциальность', href : '#'},
            {label : 'условия', href : '#'},
            {label : 'директория', href : '#'},
            {label : 'профили', href : '#'},
            {label : 'хэштеги', href : '#'},
            {label : 'язык', href : '#'}
        ],
        copyright : {label : '@ 2018 instagram'}
    }
};