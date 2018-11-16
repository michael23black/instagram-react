import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.a`
    display: flex;
    position: relative;
    align-items: flex-start;
    width: 31.5%;
    margin-top: 2.75%;
    cursor: pointer;

    &:nth-child(3n+1){
        margin-right: 2.75%;   
    }
    &:nth-child(3n+2){
        margin-right: 2.75%;
    }
    &:nth-child(1){
        margin-top: 0;
    }
    &:nth-child(2){
        margin-top: 0;
    }
    &:nth-child(3){
        margin-top: 0;
    }

    @media all and (max-width:600px){
		width: 32.5%;
        margin-top: 1.25%;

        &:nth-child(3n+1){
            margin-right: 1.25%;   
        }
        &:nth-child(3n+2){
            margin-right: 1.25%;
        }
    }
`
const Image = styled.img`
    display: block;
    flex: 1;
`
const Counter = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.05s linear;

    &:hover{
        background-color: rgba(0, 0, 0, 0.3);
        opacity:1;
    }

    @media all and (max-width:600px){
        flex-flow:column nowrap;
    }
`
const Inner = styled.div`
    display: flex;
    margin: 0px 15px 8px;
`
const Label =styled.span`
    margin-left: 8px;
    font-size: 18px;
    font-weight: bolder;
    color: #ffffff;
`

const Post = props => (
    <Box className={props.className} href={props.link}>
        <Image src={props.img}/> 
        <Counter>
            <Inner>
                <Image src={props.settings.likeImg}/>
                <Label>{props.likes}</Label>
            </Inner>
            <Inner>
                <Image src={props.settings.commentImg}/>
                <Label>{props.comments}</Label>
            </Inner>
        </Counter>           
    </Box>
)

const propTypes = {
    link: PropTypes.string,
    img: PropTypes.string.isRequired,
    settings: PropTypes.object.isRequired,
    likes: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired
};

const defaultProps = {
    link: '#',
};

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;
export default Post;