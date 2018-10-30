import React from 'react';
import styled from 'styled-components';

import Post from '../components/Post/';

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
  {url: '/images/posts-sketch/1.png', likes: '34k', comments: 945 },
  {url: '/images/posts-sketch/2.png', likes: '156k', comments: 450 },
  {url: '/images/posts-sketch/3.png', likes: '189k', comments: 143 },
  {url: '/images/posts-sketch/4.png', likes: '345k', comments: 65 },
  {url: '/images/posts-sketch/5.png', likes: '776k', comments: 655 },
  {url: '/images/posts-sketch/6.png', likes: '15k', comments: 99 },
  {url: '/images/posts-sketch/7.png', likes: '10k', comments: 656 },
  {url: '/images/posts-sketch/8.png', likes: '1k', comments: 213 },
  {url: '/images/posts-sketch/9.png', likes: '45k', comments: 145 },
  {url: '/images/posts-sketch/10.png', likes: '806k', comments: 83 },
  {url: '/images/posts-sketch/11.png', likes: '154k', comments: 445 },
  {url: '/images/posts-sketch/12.png', likes: '13k', comments: 843 },
  {url: '/images/posts-sketch/13.png', likes: '1m', comments: 156 },
  {url: '/images/posts-sketch/14.png', likes: '134k', comments: 444 },
  {url: '/images/posts-sketch/15.png', likes: '13k', comments: 378 },
  {url: '/images/posts-sketch/16.png', likes: '453k', comments: 144 },
  {url: '/images/posts-sketch/17.png', likes: '367k', comments: 967 },
];

export default class CPosts extends React.Component {
  render() {
    return(
      <SCPosts>
        {posts.map((post, i) =><Post image={post.url} likes={post.likes} comments={post.comments} key={i}/>)}
      </SCPosts>
    )
  }
};