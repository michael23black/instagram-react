import React from 'react';
import styled from 'styled-components';
import {withSize} from 'react-sizeme';

import Avatar from '../boxes/Avatar.js';
import Button from '../boxes/Button.js';
import ComplaintButton from '../boxes/ComplaintButton.js';
import Nickname from '../boxes/Nickname.js';
import Verification from '../boxes/Verification.js';

import Counters from './Counters.js';
import Stories from './Stories.js';
import Descriptions from './Descriptions.js';


import data from '../json/Data.json';

const Storage = styled.div`
    display: flex; 
    flex-direction: column;
	padding: 130px 20px 0px 20px;

    @media all and (max-width:600px){
		padding: 100px 0px 0px 0px;
    }
`
const Info = styled.div`
    display: flex;
    flex-direction: row;
`
const Inner = styled.div`
    display: flex;
    margin: 0px 0px 40px 0px;

    @media all and (max-width:600px){
		margin: 0px 10px 20px 10px;
        justify-content: flex-start;
    }
`
const InnerLeft = styled(Inner)`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    margin-right: 30px;

    @media all and (max-width:600px){
        flex: 0;
    }
`
const InnerRight = styled(Inner)`
    flex: 2;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 15px;

    @media all and (max-width:600px){
        flex: 1;
    }
`
const NameBlock = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;
    align-items: center;

    @media all and (max-width:600px){
		margin-bottom: 15px;
    }
`
const StyledButton = styled(Button)`
    width: calc(100% - 20px);
    max-width: 240px;
`

class Profile extends React.Component {
    renderWide = () =>(
        <React.Fragment>
            <Info>
                <InnerLeft>
                    <Avatar
                        url={data.profile.avatar}
                        newStories={data.profile.newStories}
                        nickname={data.profile.nickname}
                    />
                </InnerLeft>
                <InnerRight>
                    <NameBlock>
                        <Nickname nickname={data.profile.nickname} />
                        <Verification
                            url="/images/service/verification.png" 
                            active={data.profile.verification} 
                        />
                        <Button label="Подписаться" />
                        <ComplaintButton />
                    </NameBlock>
                    <Counters subsInfo={data.profile.subsInfo} />
                    <Descriptions
                        text={data.profile.text} 
                        username={data.profile.username} 
                        feedback={data.profile.feedback}
                    />
                </InnerRight>
            </Info>
            <Stories stories={data.profile.stories} />
        </React.Fragment>
    );
    renderNarrow = () => (
        <React.Fragment>
            <Info>
                <InnerLeft>
                    <Avatar
                        url={data.profile.avatar}
                        newStories={data.profile.newStories}
                        nickname={data.profile.nickname}
                    />
                </InnerLeft>
                <InnerRight>
                    <NameBlock>
                        <Nickname nickname={data.profile.nickname}/>
                        <Verification
                            url="/images/service/verification.png" 
                            active={data.profile.verification} 
                        />
                        <ComplaintButton />
                    </NameBlock>
                    <StyledButton label="Подписаться" />
                </InnerRight>
            </Info>
            <Descriptions 
                text={data.profile.text} 
                username={data.profile.username} 
                feedback={data.profile.feedback}
            />
            <Stories stories={data.profile.stories} />
            <Counters subsInfo={data.profile.subsInfo} /> 
        </React.Fragment>
    );

    render() {
        const {width} = this.props.size;
        return(
            <Storage>
                {width >= 585 ? this.renderWide() : this.renderNarrow()}
            </Storage>
      
        )
    }
} 

export default withSize()(Profile);