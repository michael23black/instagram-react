import React from 'react';
import styled, {css} from 'styled-components';

import Badge from '../components/Badge.js';
import Separator from '../components/Separator.js';
import Logo from '../components/Logo.js';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import Link from '../components/Link.js';


const Container = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    padding: 20px 0px;
	background-color: #ffffff;
	border-bottom: 1px solid #e6e6e6;
    z-index: 2;
    transition: padding 0.2s linear;

    ${props => props.scrolled && css`
        padding: 10px 0px;
    `};    
`
const Limit = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
	max-width: 970px;
    height: 36px;
    margin: 0px 20px;
`
const Sides = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    ${props => props.left && css`
        flex: 2;
        justify-content: flex-start;
        cursor: pointer; 
    `};
    ${props => props.center && css`
        justify-content: stretch;
        width: 215px;
        @media all and (max-width:750px){
            display: none;
        }
    `};
    ${props => props.right && css`
        flex: 2;
        justify-content: flex-end;
    `};
`
const StyledLink = styled(Link)`
    margin-left: 15px;
    font-size: 15px;
    color: #3897f0;
    
    @media all and (max-width:450px){
        display: none;
    }
`
const StyledSeparator = styled(Separator)`
    transition: opacity 0.2s linear;

    ${props => props.scrolled && css`
        opacity: 0;
    `};
`
const StyledLogo = styled(Logo)`
    transition: opacity 0.2s linear;

    ${props => props.scrolled && css`
        opacity: 0;
    `};
`

export default class CHeader extends React.Component {
    render() {
        return(
            <Container scrolled={this.props.scrolled}>
                <Limit>
                    <Sides as='a' left>
                        <Badge url={this.props.settings.badge.url}/>
                        <StyledSeparator scrolled={this.props.scrolled}/>
                        <StyledLogo url={this.props.settings.logo.url} scrolled={this.props.scrolled}/>
                    </Sides>
                    <Sides center>
                        <Input />
                    </Sides>
                    <Sides right>
                        <Button label={this.props.settings.button.label} />
                        <StyledLink label={this.props.settings.link.label} />
                    </Sides>
                </Limit>
            </Container>
        )
    }
}