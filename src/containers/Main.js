import React from 'react';
import styled from 'styled-components';

import Header from './Header.js';
import User from './User.js';
import Footer from './Footer.js';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
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
                <Header 
                    scrolled={!this.state.scrolled}
                    settings={settings.header}
                />
                <User 
                    settings={settings.user}
                    data={data.user}
                />
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
            posts : [
                {url : '/images/profile/posts-sketch/1.png', likes : '34k', comments : 945, href : '#' },
                {url : '/images/profile/posts-sketch/2.png', likes : '156k', comments : 450, href : '#' },
                {url : '/images/profile/posts-sketch/3.png', likes : '189k', comments : 143, href : '#' },
                {url : '/images/profile/posts-sketch/4.png', likes : '345k', comments : 65, href : '#' },
                {url : '/images/profile/posts-sketch/5.png', likes : '776k', comments : 655, href : '#' },
                {url : '/images/profile/posts-sketch/6.png', likes : '15k', comments : 99, href : '#' },
                {url : '/images/profile/posts-sketch/7.png', likes : '10k', comments : 656, href : '#' },
                {url : '/images/profile/posts-sketch/8.png', likes : '1k', comments : 213, href : '#' },
                {url : '/images/profile/posts-sketch/9.png', likes : '45k', comments : 145, href : '#' },
                {url : '/images/profile/posts-sketch/10.png', likes : '806k', comments : 83, href : '#' },
                {url : '/images/profile/posts-sketch/11.png', likes : '154k', comments : 445, href : '#' },
                {url : '/images/profile/posts-sketch/12.png', likes : '13k', comments : 843, href : '#' },
                {url : '/images/profile/posts-sketch/13.png', likes : '1m', comments : 156, href : '#' },
                {url : '/images/profile/posts-sketch/14.png', likes : '134k', comments : 444, href : '#' },
                {url : '/images/profile/posts-sketch/15.png', likes : '13k', comments : 378, href : '#' },
                {url : '/images/profile/posts-sketch/16.png', likes : '453k', comments : 144, href : '#' },
                {url : '/images/profile/posts-sketch/17.png', likes : '367k', comments : 967, href : '#' }
            ]
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
                {label : 'Публикации', href : '#', img : '/images/service/publication.png'},
                {label : 'Отметки', href : '#', img : '/images/service/tagged.png'}
            ],
            counter : {
                like : {url : '/images/service/like.png'},
                comment : {url : '/images/service/comment.png'}
            }
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