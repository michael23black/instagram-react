import React from 'react';
import styled from 'styled-components';

import Icon from '../components/Icon.js';
import Separator from '../components/Separator.js';
import Logo from '../components/Logo.js';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import Link from '../components/Link.js';

const Container = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;
	border-bottom: 1px solid #e6e6e6;
    z-index: 2; 
`
const Inner = styled.div`
    display: flex;
    flex-basis: 970px;
    margin: 20px 20px;
    transition: margin 0.2s linear;
    margin: ${props => props.scrolled ? '10px 20px' : '20px 20px'};
`
const Side = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`
const SideLeft = styled(Side)`
    flex: 2;
    justify-content: flex-start;
    cursor: pointer; 
`
const SideCenter = styled(Side)`
    width: 215px;
    min-width: 125px;
    @media all and (max-width:650px){
        display: none;
    }
`
const SideRight = styled(Side)`
    flex: 2;
    justify-content: flex-end;
`
const StyledSeparator = styled(Separator)`
    transition: opacity 0.2s linear;
    opacity: ${props => props.scrolled ? '0' : '1'};

    @media all and (max-width:600px){
        display: none;
    }
`
const StyledLogo = styled(Logo)`
    transition: opacity 0.2s linear;
    opacity: ${props => props.scrolled ? '0' : '1'};

    @media all and (max-width:600px){
        display: none;
    }
`
const StyledIcon = styled(Icon)`
    margin-right: 30px;

    &:last-child{
        margin: 0px;
    }
`

class Header extends React.Component {
    render() {
        return(
            <Container>
                <Inner scrolled={this.props.scrolled}>
                    <SideLeft as='a' left>
                        <Icon url='/images/service/badge.png' />
                        <StyledSeparator scrolled={this.props.scrolled} />
                        <StyledLogo 
                            url='/images/service/logo.png' 
                            scrolled={this.props.scrolled} 
                        />
                    </SideLeft>
                    <SideCenter>
                        <Input 
                            deleteUrl='/images/service/delete.png' 
                            findUrl='/images/service/find.png' 
                        />
                    </SideCenter>
                    <SideRight>
                        <StyledIcon url='/images/service/search.png' />
                        <StyledIcon url='/images/service/activity.png' />
                        <StyledIcon url='/images/service/profile.png' />
                    </SideRight>
                </Inner>
        </Container>
        )
    }
}

export default Header;