import React from 'react';
import styled from 'styled-components';

import AboutUsLink from '../components/AboutUsLink/';
import Copyright from '../components/Copyright/';

const SCFooter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 38px 20px;

    @media all and (max-width:600px){
        margin: 18px 20px; 
	}
`
const SCLinks = styled.div`
	display: flex;
	flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    
    @media all and (max-width:600px){
        justify-content: center;
	}
`

export default class CFooter extends React.Component {
    render() {
        return(
            <SCFooter>
                <SCLinks>
                    <AboutUsLink label='о нас'/>
                    <AboutUsLink label='поддержка'/>
                    <AboutUsLink label='пресса'/>
                    <AboutUsLink label='api'/>
                    <AboutUsLink label='вакансии'/>
                    <AboutUsLink label='конфеденциальность'/>
                    <AboutUsLink label='условия'/>
                    <AboutUsLink label='директория'/>
                    <AboutUsLink label='профили'/>
                    <AboutUsLink label='хэштеги'/>
                    <AboutUsLink label='язык'/>
                </SCLinks>
                <Copyright label='@ 2018 instagram'/>
            </SCFooter>
        )
    }
}