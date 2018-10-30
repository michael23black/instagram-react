import React from 'react';
import styled from 'styled-components';

import Badge from '../components/Badge/';
import Separator from '../components/Separator/';
import Logo from '../components/Logo/';
import Input from '../components/Input/';
import Button from '../components/Button/';
import CheckInLink from '../components/CheckInLink/';

const SCHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    padding: ${props => props.scrolled ? '10px 0px' : '20px 0px'};
	background-color: #ffffff;
	border-bottom: 1px solid #e6e6e6;
    z-index: 2;
    transition: padding 0.2s linear;
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
const SCVisible = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    opacity: ${props => props.visible ? '1' : '0'};
    transition: opacity 0.2s linear;
`

export default class CHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {scrolled : false, visible : true};
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    } 
    handleScroll(event) {
        if(window.pageYOffset === 0){
            this.setState({scrolled : false, visible : true});
        }
        else{
            this.setState({scrolled : true, visible : false});
        }
    };
    render() {
        return(
            <SCHeader scrolled={this.state.scrolled}>
                <SCLimit>
                    <SCSides left>
                        <Badge />
                        <SCVisible visible={this.state.visible}>
                            <Separator />
                            <Logo />
                        </SCVisible>
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