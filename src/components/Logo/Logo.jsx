import React from 'react';
import styled from 'styled-components';

import ILogo from './Logo.png';

const SLogo =styled.div`
    margin-top: 7px;
    }
`

const SImage = styled.img`
    height: 29px;
    width: 103px;
`

export default class Logo extends React.Component {
    render() {
        return(
            <SLogo>
                <SImage src={ILogo} />
            </SLogo>
        )
    }
}