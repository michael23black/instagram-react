import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.a`
    display: flex;
	flex-flow: column nowrap;
	align-items: center;
    justify-content: space-evenly;
    width: 130px;
	height: 130px;
	min-width: 130px;
    min-height: 130px;
    margin-left: 5px;
    text-decoration: none;
    
    @media all and (max-width:600px){
        width: 75px;
		height: 75px;
		min-width: 75px;
		min-height: 75px;
    }
`

const Image = styled.img`
	width: 80px;
	height: 80px;
	box-sizing: border-box;
	padding: 3px;
	border: 1px solid #dbdbdb;
	border-radius: 40px;
    
    @media all and (max-width:600px){
		width: 65px;
		height: 65px;
        padding: 2px;
	}
`

const Label = styled.span`
    font-size: 14px;
    font-weight: bold;

    @media all and (max-width:600px){
        font-size: 12px;
        font-weight: normal;
    }
`

const Story = props =>(
    <Box className={props.className} href={props.link}>
        <Image src={props.url}/>
        <Label>{props.label}</Label>
    </Box>
);

const propTypes = {
    link: PropTypes.string,
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

const defaultProps = {
    link: '#'
};

Story.propTypes = propTypes;
Story.defaultProps = defaultProps;
export default Story;