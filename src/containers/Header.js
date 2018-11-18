import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../boxes/Icon.js';
import Separator from '../boxes/Separator.js';
import Logo from '../boxes/Logo.js';
import Input from '../boxes/Input.js';

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
    margin: ${props => props.top 
        ? '20px 20px' : '10px 20px'
    };
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
    opacity: ${props => props.top 
        ? '1' : '0'
    };

    @media all and (max-width:600px){
        display: none;
    }
`

const StyledLogo = styled(Logo)`
    transition: opacity 0.2s linear;
    opacity: ${props => props.top 
        ? '1' : '0'
    };

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

const Header = props => (
    <Container>
        <Inner top={props.top}>
            <SideLeft as="a" left>
                <Icon url="/images/service/badge.png" />
                <StyledSeparator top={props.top} />
                <StyledLogo 
                    url="/images/service/logo.png" 
                    top={props.top}
                />
            </SideLeft>
            <SideCenter>
                <Input 
                    deleteUrl="/images/service/delete.png" 
                    findUrl="/images/service/find.png" 
                />
            </SideCenter>
            <SideRight>
                <StyledIcon url="/images/service/search.png" />
                <StyledIcon url="/images/service/activity.png" />
                <StyledIcon url="/images/service/profile.png" />
            </SideRight>
        </Inner>
    </Container>
);


const propTypes = {
    top: PropTypes.bool
};

const defaultProps = {
    top: true
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;