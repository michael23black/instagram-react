import React from 'react';
import styled from 'styled-components';
import {withSize} from 'react-sizeme';

import Avatar from '../components/Avatar.js';
import Button from '../components/Button.js';
import Counter from '../components/Counter.js';
import Name from '../components/Name.js';
import Nickname from '../components/Nickname.js';
import Verification from '../components/Verification.js';
import Description from '../components/Description.js';
import Feedback from '../components/Feedback.js';
import Story from '../components/Story.js';

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
        flex: 0;
        justify-content: flex-start;
    }
`
const InnerLeft = styled(Inner)`
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    margin-right: 30px;
`
const InnerRight = styled(Inner)`
    flex: 2;
    flex-direction: column;
    align-items: flex-start;
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
    @media all and (max-width:600px){
		margin-bottom: 10px;
    }
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

class Profile extends React.Component {
    renderWide(){
        return(
            <Container>
                <Info>
                    <InnerLeft>
                        <Avatar url={data.profile.avatar}/>
                    </InnerLeft>
                    <InnerRight>
                        <NameBlock>
                            <Nickname nickname={data.profile.nickname}/>
                            <Verification
                                url='/images/service/verification.png' 
                                active={data.profile.verification} 
                            />
                            <Button label='Подписаться' />
                        </NameBlock>
                        <CounterBlock>
                            <Counter count={data.profile.publications} label='публикаций' />
                            <Counter count={data.profile.followers} label='подписчиков' />
                            <Counter count={data.profile.following} label='подписки' />
                        </CounterBlock>
                        <User>
                            <Name username={data.profile.name}/>
                            <Description text={data.profile.text}/>
                            {data.profile.feedback.map((link,i) =>
                                <Feedback 
                                    label={link.label}
                                    view={link.view}
                                    key={i}
                                />
                            )}
                        </User>
                    </InnerRight>
                </Info>
                <StoryBlock>
                    {data.profile.stories.map((story, i) =>
                        <Story 
                            label={story.label} 
                            url={story.url} 
                            key={i}
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
                        <Avatar url={data.profile.avatar}/>
                    </InnerLeft>
                    <InnerRight>
                        <NameBlock>
                            <Nickname nickname={data.profile.nickname}/>
                            <Verification
                                url='/images/service/verification.png' 
                                active={data.profile.verification} 
                            />
                        </NameBlock>
                        <Button label='Подписаться' />
                    </InnerRight>
                </Info>
                <User>
                    <Name username={data.profile.name}/>
                    <Description text={data.profile.text}/>
                    {data.profile.feedback.map((link,i) =>
                        <Feedback 
                            label={link.label}
                            view={link.view}
                            key={i}
                        />
                    )}
                </User>
                <StoryBlock>
                    {data.profile.stories.map((story, i) =>
                        <Story 
                            label={story.label} 
                            url={story.url} 
                            key={i}
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
                {width >= 585 ? this.renderWide() : this.renderNarrow() }
            </React.Fragment>
        )
    }
} 

export default withSize()(Profile);