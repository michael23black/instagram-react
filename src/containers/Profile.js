import React from 'react';
import styled from 'styled-components';

import Avatar from '../components/Avatar.js';
import Button from '../components/Button.js';
import Counter from '../components/Counter.js';
import Name from '../components/Name.js';
import Verification from '../components/Verification.js';
import Description from '../components/Description.js';
import Feedback from '../components/Feedback.js';
import Story from '../components/Story.js';

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
            </SCProfile>
        )
    }
} 