import React from 'react';
import styled from 'styled-components';

import IVerification from './IVerification.png'

const SVerification = styled.img` 
	margin-right: 20px;
	height: 18px;
	width: 18px;
}
`

export default class Verification extends React.Component {
    render() {
        return(
            <SVerification src={IVerification} />
        )
    }
}