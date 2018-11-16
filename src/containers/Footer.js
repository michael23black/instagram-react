import React from 'react';
import styled from 'styled-components';

import Link from '../boxes/Link.js';
import Copyright from '../boxes/Copyright.js';

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
const StyledLink = styled(Link)`
    margin: 0px 15px 10px 0px;
    color: #003572;
    text-transform: uppercase;
`

class Footer extends React.Component {
    render() {
        return(
            <Container>
                <Inner>
                    <LinkBlock>
                        <StyledLink label='о нас' />
                        <StyledLink label='поддержка' />
                        <StyledLink label='пресса' />
                        <StyledLink label='api' />
                        <StyledLink label='вакансии' />
                        <StyledLink label='конфеденциальность' />
                        <StyledLink label='условия' />
                        <StyledLink label='директория' />
                        <StyledLink label='профили' />
                        <StyledLink label='хэштеги' />
                        <StyledLink label='язык' />
                    </LinkBlock>
                    <Copyright label='@ 2018 instagram' />
                </Inner>
            </Container>
        )
    }
}

export default Footer;