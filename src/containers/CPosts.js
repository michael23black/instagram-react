import React from 'react';
import styled from 'styled-components';

import Section from '../components/Section.js';
import Post from '../components/Post.js';

const SCSections = styled.div`
	display: flex;
	flex-flow: row nowrap;
    justify-content: center;
    margin: 0px 20px;
    border-top: 1px solid #efefef;

    @media all and (max-width:600px){
        justify-content: space-around;
        margin: 0px;
    }
`
const SCImages = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 0px 20px;

    @media all and (max-width:600px){
		margin: 0px;
	}
`

export default class CPosts extends React.Component {
  render() {
    return(
      <div>
        <SCSections>
          {this.props.buttons.map((button, i) => <Section label={button.label} active={button.active} href={button.href} img={button.img} key={i}/>)}
        </SCSections>
        <SCImages>
          {this.props.posts.map((post, i) =><Post image={post.url} likes={post.likes} comments={post.comments} href={post.href} key={i}/>)}
        </SCImages>
      </div>
    )
  }
};