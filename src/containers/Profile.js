import React from 'react';
import styled from 'styled-components';
import {withSize} from 'react-sizeme';

import Avatar from '../boxes/Avatar.js';

import Button from '../boxes/Button.js';
import ComplaintButton from '../boxes/ComplaintButton.js';
import Counter from '../boxes/Counter.js';
import Name from '../boxes/Name.js';
import Nickname from '../boxes/Nickname.js';
import Verification from '../boxes/Verification.js';
import Feedback from '../boxes/Feedback.js';
import Story from '../boxes/Story.js';

import data from '../json/Data.json';

const Container = styled.div`
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
const InnerBlock = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;
    align-items: center;
`
const CounterBlock = styled(InnerBlock)`
    @media all and (max-width:600px){
        justify-content: space-around;
        padding: 15px 0px;
		margin-bottom: 0px;
        border-top: 1px solid #efefef;
    }
`
const NameBlock = styled(InnerBlock)`
`
const User = styled.div`
    font-size: 16px;
	line-height: 1.5;

    @media all and (max-width:600px){
		font-size: 14px;
        margin: 0px 15px 20px 15px;
    }
`
const StoryBlock = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 50px;  
    overflow: hidden;

    @media all and (max-width:600px){
		padding-bottom: 20px;
    }
`
const StyledButton = styled(Button)`
    width: calc(100% - 20px);
    max-width: 240px;
`
const UserBlock = (props) =>
    <User>
                            <Name username={data.profile.name}/>
                            {data.profile.text}
                            {data.profile.feedback.map((link,i) =>
                                <Feedback 
                                    label={link.label}
                                    view={link.view}
                                    key={i}
                                />
                            )}
                        </User>


class Profile extends React.Component {

    
    renderWide(){
        return(
            <Container>
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
                                url='/images/service/verification.png' 
                                active={data.profile.verification} 
                            />
                            <Button label='Подписаться' />
                            <ComplaintButton />
                        </NameBlock>
                        <CounterBlock>
                            <Counter count={data.profile.publications} label='публикаций'/>
                            <Counter count={data.profile.followers} label='подписчиков'/>
                            <Counter count={data.profile.following} label='подписки'/>
                        </CounterBlock>
                        <UserBlock />
                    </InnerRight>
                </Info>
                <StoryBlock>
                    {data.profile.stories.map(story =>
                        <Story 
                            label={story.label} 
                            url={story.url} 
                            href={story.href}
                            key={story.id}
                        />
                    )}
                </StoryBlock>
            </Container>            
        )
    }
    renderNarrow(){
        return(
            <Container>
                <Info>
                    <InnerLeft>
                        <Avatar 
                             
                            url={data.profile.avatar}
                            newStories={data.profile.newStories}
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
                <User>
                    <Name username={data.profile.name}/>
                    {data.profile.text}
                    {data.profile.feedback.map((link,i) =>
                        <Feedback 
                            label={link.label}
                            view={link.view}
                            key={i}
                        />
                    )}
                </User>
                <StoryBlock>
                    {data.profile.stories.map(story =>
                        <Story 
                            label={story.label} 
                            url={story.url} 
                            href={story.href}
                            key={story.id}
                        />
                    )}
                </StoryBlock>
                <CounterBlock>
                    <Counter count={data.profile.publications} label='публикаций' />
                    <Counter count={data.profile.followers} label='подписчиков' />
                    <Counter count={data.profile.following} label='подписки' />
                </CounterBlock>
            </Container>          
        )
    }
    render() {
        const {width} = this.props.size;
        return(
            <React.Fragment>
                {width >= 585 ? this.renderWide() : this.renderNarrow()}
            </React.Fragment>
      
        )
    }
} 

export default withSize()(Profile);