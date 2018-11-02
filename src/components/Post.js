import React from 'react';
import styled from 'styled-components';

const SPost = styled.a`
    display: flex;
    align-items: flex-start;
    position: relative;
    height: 100%;
    width: 31.5%;
    margin-bottom: 2.75%;
    cursor: pointer;

    :nth-child(3n+1){
        margin-right: 2.75%;   
    }
    :nth-child(3n+2){
        margin-right: 2.75%;
    }
    :nth-last-child(1){
        margin-bottom: 0;
    }
    :nth-last-child(2){
        margin-bottom: 0;
    }
    :nth-last-child(3){
        margin-bottom: 0;
    }

    @media all and (max-width:600px){
		width: 32.5%;
        margin-bottom: 1.25%;
        :nth-child(3n+1){
            margin-right: 1.25%;   
        }
        :nth-child(3n+2){
            margin-right: 1.25%;
        }
    }
`
const SImage = styled.img`
    display: block;
    width: 100%;
`
const SCounter = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;

    @media all and (max-width:600px){
        flex-flow:column nowrap;
    }
    
    &:hover{
        background-color: rgba(0, 0, 0, 0.3);
        opacity:1;
    }
`
const SInfo = styled.div`
    display: flex;
    margin: 0px 15px 8px;
`
const SLabel =styled.span`
    margin-left: 8px;
    font-size: 18px;
    font-weight: bolder;
    color: #ffffff;
`
export default class Post extends React.Component {
    render() {
        return(
            <SPost href={this.props.href}>
                <SImage src={this.props.image}/> 
                <SCounter>
                    <SInfo>
                        <img src={''} alt='Like icon'/>
                        <SLabel>{this.props.likes}</SLabel>
                    </SInfo>
                    <SInfo>    
                        <img src={''} alt='Comment icon'/>
                        <SLabel>{this.props.comments}</SLabel>    
                    </SInfo>
                </SCounter>           
            </SPost>
        )
    }
}