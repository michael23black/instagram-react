import React from 'react';
import styled from 'styled-components';

import Link from '../components/Link.js';
import Copyright from '../components/Copyright.js';

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
                    {this.props.links.footer.map((link, i) => <Link label={link.label} href={link.href} key={i}/>)}
                </SCLinks>
                <Copyright label='@ 2018 instagram'/>
            </SCFooter>
        )
    }
}