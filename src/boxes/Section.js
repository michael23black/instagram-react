import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const Box = styled.div`
    display: ${props => props.have 
        ? 'none' : 'flex'
    };
    flex-flow: row nowrap;
    align-items: center;
    height: 52px;
    margin-right: 60px;
    text-decoration: none;
    
    ${props => props.active && css`
        border-top: 1px solid #000000;
        margin-top: -1px;
    `};
    
    &:last-child{
        margin-right: 0px;
    }
    
    @media all and (max-width:600px){
        border: none;
        margin: 0px;
    }
    
`
const Image = styled.img`
    display: block;
    width: 12px;
    height: 12px;
    filter: brightness(0%);
    opacity: ${props => props.active ? '1' : '0.6'};

    @media all and (max-width:600px){
        width: 24px;
        height: 24px;
        opacity: 1;
        filter: ${props => props.active ? 'grayscale(0)' : 'grayscale(0.9)'};
    }
`
const Label =styled.span`
    margin-left: 5px; 
    font-weight: bold;
    color: ${props => props.active ? '#000' : '#999'};
    text-transform: uppercase;
    letter-spacing: 2px;

    @media all and (max-width:600px){
        display: none;
	}
`

const Section = props => (
    <Box 
        className={props.className}
        have={props.have} 
        active={props.active} 
        onClick={props.onClick} 
    >
        <Image active={props.active} src={props.img}/>
        <Label active={props.active}>
            {props.label}
        </Label>
    </Box>
)

const propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string.isRequired,
    have: PropTypes.bool,
    img: PropTypes.string.isRequired
};

const defaultProps = {
    active: false,
    have: false
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
export default Section;