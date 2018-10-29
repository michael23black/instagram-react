import React from 'react';
import styled from 'styled-components';

import Post from './../../components/Post/Post.jsx';

const SCPosts = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 0px 20px;

    @media all and (max-width:600px){
		margin: 0px;
	}
`

const posts = [
  {url: '/img/p/1.png', likes: '100k', comments: 945 },
  {url: '/img/p/2.png', likes: '100k', comments: 450 },
  {url: '/img/p/3.png', likes: '100k', comments: 143 },
  {url: '/img/p/4.png', likes: '100k', comments: 65 },
  {url: '/img/p/5.png', likes: '100k', comments: 655 },
  {url: '/img/p/6.png', likes: '100k', comments: 99 },
  {url: '/img/p/7.png', likes: '100k', comments: 656 },
  {url: '/img/p/8.png', likes: '100k', comments: 213 },
  {url: '/img/p/9.png', likes: '100k', comments: 145 },
  {url: '/img/p/10.png', likes: '100k', comments: 83 },
  {url: '/img/p/11.png', likes: '100k', comments: 445 },
  {url: '/img/p/12.png', likes: '100k', comments: 843 },
  {url: '/img/p/13.png', likes: '100k', comments: 156 },
  {url: '/img/p/14.png', likes: '100k', comments: 444 },
  {url: '/img/p/15.png', likes: '100k', comments: 378 },
  {url: '/img/p/16.png', likes: '100k', comments: 144 },
  {url: '/img/p/17.png', likes: '100k', comments: 967 },
];

export default class CPosts extends React.Component {
    render() {
        return(
            <SCPosts>
              {
                posts.map(post => 
                <Post image={post.url} likes={post.likes} comments={post.comments}/>
                )
              }
            </SCPosts>
        )
    }
}