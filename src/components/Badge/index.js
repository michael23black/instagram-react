import React from 'react';
import styled from 'styled-components';

import IBadge from './Badge.png'

const SBadge = styled.img`
    height: 24px;
    width: 24px; 
`

export default class Badge extends React.Component {
    render() {
        return(
            <SBadge src={IBadge}/>
        )
    }
}
