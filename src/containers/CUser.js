import React from 'react';
import styled from 'styled-components';

import CProfile from './CProfile.js';
import CPosts from './CPosts.js';
import CFooter from './CFooter.js';

const SCUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #fafafa;
`
const SCLimit = styled.div`
    width: 100%;
	max-width: 975px;
`
const buttons = [
    {label: 'Публикации', href: '#', img: '/images/service/publication.png', active: false },
    {label: 'Отметки', href: '#', img: '/images/service/tagged.png', active: false},
];

const posts = [
    {url: '/images/posts-sketch/1.png', likes: '34k', comments: 945, href: '#' },
    {url: '/images/posts-sketch/2.png', likes: '156k', comments: 450, href: '#' },
    {url: '/images/posts-sketch/3.png', likes: '189k', comments: 143, href: '#' },
    {url: '/images/posts-sketch/4.png', likes: '345k', comments: 65, href: '#' },
    {url: '/images/posts-sketch/5.png', likes: '776k', comments: 655, href: '#' },
    {url: '/images/posts-sketch/6.png', likes: '15k', comments: 99, href: '#' },
    {url: '/images/posts-sketch/7.png', likes: '10k', comments: 656, href: '#' },
    {url: '/images/posts-sketch/8.png', likes: '1k', comments: 213, href: '#' },
    {url: '/images/posts-sketch/9.png', likes: '45k', comments: 145, href: '#' },
    {url: '/images/posts-sketch/10.png', likes: '806k', comments: 83, href: '#' },
    {url: '/images/posts-sketch/11.png', likes: '154k', comments: 445, href: '#' },
    {url: '/images/posts-sketch/12.png', likes: '13k', comments: 843, href: '#' },
    {url: '/images/posts-sketch/13.png', likes: '1m', comments: 156, href: '#' },
    {url: '/images/posts-sketch/14.png', likes: '134k', comments: 444, href: '#' },
    {url: '/images/posts-sketch/15.png', likes: '13k', comments: 378, href: '#' },
    {url: '/images/posts-sketch/16.png', likes: '453k', comments: 144, href: '#' },
    {url: '/images/posts-sketch/17.png', likes: '367k', comments: 967, href: '#' },
  ];

export default class CUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {p : true};
    }
    render() {
        return(
            <SCUser>
                <SCLimit>
                    <CProfile />
                    <CPosts buttons={buttons} posts={posts}/>
                    <CFooter links={this.props.links} />
                </SCLimit>
            </SCUser>
        )
    }
}