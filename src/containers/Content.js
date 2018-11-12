import React from 'react';
import styled from 'styled-components';

import Section from '../components/Section.js';
import Post from '../components/Post.js';

import data from '../json/Data.json';

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
`
const InnerSections = styled(Inner)`
	justify-content: center;
	border-top: 1px solid #efefef;
		
	@media all and (max-width:600px){
    	justify-content: space-around;
	}
`
const InnerPosts = styled(Inner)`
	flex-wrap: wrap;
	justify-content: flex-start;
`

class Content extends React.Component {
	state = {
		content : 'publication'
	};
	setContent = (content) => {
		this.setState({
			content : content
		});
	}
	render() {
		const {content} = this.state;
		const posts = content === 'publication' ? data.content.posts : content === 'tagged' ? data.content.tagged : data.content.igtv;
		return (
			<Container>
				<InnerSections>
					<Section
						onClick={() => this.setContent('publication')}
						active={content === 'publication'}
						have={data.content.posts.length === 0}
						label='Публикации' 
						img='/images/service/publication.png' 
						key={1}
					/>
					<Section
						onClick={() => this.setContent('igtv')}
						active={content === 'igtv'}
						have={data.content.igtv.length === 0}
						label='IGTV' 
						img='/images/service/tv.png'
						key={2}
					/> 
					<Section
						onClick={() => this.setContent('tagged')}
						active={content === 'tagged'}
						have={data.content.tagged.length === 0}
						label='Отметки' 
						img='/images/service/tagged.png'
						key={3}
					/>
				</InnerSections>
				<InnerPosts>
					{posts.map((post, i) =>
						<Post 
							settings={{likeImg : '/images/service/like.png', commentImg : '/images/service/comment.png'}} 
							href={post.href} 
							img={post.url} 
							likes={post.likes} 
							comments={post.comments} 
							key={i}
						/>
					)}
				</InnerPosts>
			</Container>
		)
  }
};

export default Content;