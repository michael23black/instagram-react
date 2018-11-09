import React from 'react';
import styled from 'styled-components';
import {withSize} from 'react-sizeme';

import Avatar from '../components/Avatar.js';
import Button from '../components/Button.js';
import Name from '../components/Name.js';
import Verification from '../components/Verification.js';
import Description from '../components/Description.js';
import Feedback from '../components/Feedback.js';
import Story from '../components/Story.js';

import data from '../json/Data.json';

const Container = styled.div`
	margin: 130px 20px 0px 20px;

    @media all and (max-width:600px){
		margin: 100px 10px 0px 10px;
    }
`

class Profile extends React.Component {
    
    renderMin() {
        return(<div></div>)
    }
    
    render() {
        const {width} = this.props.size;

        let message;
        if(width > 500) {
            message = "shirina bolshe pyatisot"
        } else {
            message = "shirina menshe 4em nada"
        }

        return(
            <Container>
                {message}
            </Container>
        )
    }
} 

export default withSize()(Profile);