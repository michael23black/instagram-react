import React from 'react';
import styled from 'styled-components';

import Link from '../components/Link.js';
import Copyright from '../components/Copyright.js';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`
const Inner = styled.div`
    display: flex;
    flex-basis: 935px;
    flex-direction: column; 
    margin: 38px 20px;

    @media all and (max-width:600px){
        margin: 18px 20px;
    }
`
const LinkBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    
    @media all and (max-width:600px){
        justify-content: center;
	}
`
const StyledCopyright = styled(Copyright)`
    @media all and (max-width:600px) {
        text-align: center;
    }
`
const StyledLink = styled(Link)`
    margin: 0px 15px 10px 0px;
    color: #003572;
    text-transform: uppercase;
`
export default class Footer extends React.Component {
    render() {
        return(
            <Container>
                <Inner>
                    <LinkBlock>
                        {this.props.settings.links.map((link, i) => <StyledLink label={link.label} href={link.href} key={i}/>)}
                    </LinkBlock>
                    <StyledCopyright label={this.props.settings.copyright.label}/>
                </Inner>
            </Container>
        )
    }
}