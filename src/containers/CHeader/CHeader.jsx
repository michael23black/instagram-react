import React from 'react';
import styled from 'styled-components';

import Badge from './../../components/Badge/Badge.jsx';
import Separator from './../../components/Separator/Separator.jsx';
import Logo from './../../components/Logo/Logo.jsx';
import Input from './../../components/Input/Input.jsx';
import Button from './../../components/Button/Button.jsx';
import CheckInLink from './../../components/CheckInLink/CheckInLink.jsx';

const SCHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    padding: 20px 0px;
	background-color: #ffffff;
	border-bottom: 1px solid #e6e6e6;
	z-index: 2;
`
const SCLimit = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
	max-width: 970px;
    height: 36px;
    margin: 0px 20px;
`
const SCSides = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex: ${props => props.center ? 'none' : '1'};
    align-items: center;
    justify-content: ${props => props.left ? 'flex-start' : props.right ? 'flex-end' : 'stretch'};
    width: ${props => props.center ? '215px' : 'none'};
    cursor: ${props => props.left ? 'pointer' : 'default'};
    
    @media all and (max-width:800px){
        display: ${props => props.center ? 'none' : 'flex'};
    }
`

export default class CHeader extends React.Component {
    render() {
        return(
            <SCHeader>
                <SCLimit>
                    <SCSides left>
                        <Badge />
                        <Separator />
                        <Logo />
                    </SCSides>
                    <SCSides center>
                        <Input />
                    </SCSides>
                    <SCSides right>
                        <Button label='Войти' />
                        <CheckInLink label='Зарегистрироваться' />
                    </SCSides>
                </SCLimit>
            </SCHeader>
        )
    }
}