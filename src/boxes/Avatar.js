import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div` 
    padding: 3px; 
    background: ${props => props.newStories 
        ? 'linear-gradient(to top right, #f99e4c, #c82d8e)' : 'none'
    }; 
    border-radius: 50%;	
`

const Image = styled.img`
    display: block;
    width: 150px;
	height: 150px;
	padding: 1px;
    border: ${props => props.newStories 
        ? '5px solid #efefef' : 'none'
    };
    border-radius: 50%;
    background-color: #e6e6e6;
	
    @media all and (max-width:600px){
        width: 75px;
		height: 75px;
        border: ${props => props.newStories 
            ? '3px solid #efefef' : 'none'
        };
	}
`

const Avatar = props => (
    <Box className={props.className} newStories={props.newStories}>
        <Image 
            src={props.url} 
            alt={'Фото профиля ' + props.nickname}
            newStories={props.newStories} 
        />
    </Box>
);

const propTypes ={
    newStories: PropTypes.bool,
    url: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired
};

const defaultProps = {
    newStories: false
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
export default Avatar;