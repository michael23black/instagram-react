import React from 'react';
import styled, {css} from 'styled-components';

import Badge from '../components/Badge.js';
import Separator from '../components/Separator.js';
import Logo from '../components/Logo.js';
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import CheckInLink from '../components/CheckInLink.js';

const SCHeader = styled.div`
    display: flex;
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
    align-items: center;
    ${props => props.left && css`
        flex: 2;
        justify-content: flex-start;
        cursor: pointer; 
    `};
    ${props => props.center && css`
        flex: 1;
        justify-content: stretch;
        @media all and (max-width:800px){
            display: none;
        }
    `};
    ${props => props.right && css`
        flex: 2;
        justify-content: flex-end;
    `};
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