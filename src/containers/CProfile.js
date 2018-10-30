import React from 'react';
import styled from 'styled-components';

import Avatar from '../components/Avatar/';
import Nickname from '../components/Nickname/';
import Button from '../components/Button/';
import Counter from '../components/Counter/';
import Name from '../components/Name/';
import Verification from '../components/Verification/';
import Description from '../components/Description/';
import Feedback from '../components/Feedback/';
import Story from '../components/Story/';
import CStories from './CStories.js';

const avatar = '/images/profile/avatar.jpg';

const SCProfile = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin: 128px 20px 0px 20px;

    @media all and (max-width:600px){
		margin: 98px 10px 0px 10px;
    }
`

export default class CProfile extends React.Component {
    render() {
        return(
            <SCProfile>           
                <CStories />
            </SCProfile>
        )
    }
} 