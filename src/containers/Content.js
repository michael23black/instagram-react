import React from 'react';
import styled, {css} from 'styled-components';

import Section from '../components/Section.js';
import Post from '../components/Post.js';

const Container = styled.div`
	display: block;
`
const Inner = styled.div`
	display: flex;
	flex-direction: row;
    margin: 0px 20px;

    @media all and (max-width:600px){
        margin: 0px;
	}
	${props => props.sections && css`
		justify-content: center;
		border-top: 1px solid #efefef;
		
		@media all and (max-width:600px){
        	justify-content: space-around;
		}
	`};
	${props => props.posts && css`
		flex-wrap: wrap;
		justify-content: flex-start;
    `};
`

export default class Content extends React.Component {
  	render() {
    return (
    	<Container>
        	<Inner sections>
    			{this.props.settings.section.map((button, i) => 
					<Section
						label={button.label} 
						href={button.href} 
						img={button.img} 
						key={i}
					/>
				)}
       	 	</Inner>
        	<Inner posts>
          		{this.props.data.posts.map((post, i) =>
					<Post 
					  	settings={this.props.settings.counter} 
						href={post.href} 
						img={post.url} 
						likes={post.likes} 
						comments={post.comments} 
						key={i}
					/>
				)}
        	</Inner>
      	</Container>
    )
  }
};