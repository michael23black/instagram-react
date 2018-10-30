import React from 'react';
import styled from 'styled-components';

import CHeader from './../CHeader/CHeader.jsx';
import CUser from './../CUser/CUser.jsx';

const SCMain = styled.div`
    background-color: #fafafa;
`

export default class CMain extends React.Component {
    render() {
        return(
            <SCMain>
                <CHeader />
                <CUser />
            </SCMain>
        )
    }
}