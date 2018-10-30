import React from 'react';
import styled from 'styled-components';

import Section from '../components/Section/';

const SSections = styled.div`
	display: flex;
	flex-flow: row nowrap;
    justify-content: center;
    margin: 0px 20px;
    border-top: 1px solid #efefef;

    @media all and (max-width:600px){
        justify-content: space-around;
        margin: 0px;
    }
`

export default class Sections extends React.Component {
    render() {
        return(
            <SSections>
                <Section label='Публикации'/>
                <Section label='Отметки'/>
            </SSections>
        )
    }
}