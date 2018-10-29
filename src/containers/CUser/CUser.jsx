import React from 'react';
import styled from 'styled-components';

import CProfile from './../CProfile/CProfile.jsx';
import CSections from './../CSections/CSections.jsx';
import CPosts from './../CPosts/CPosts.jsx';
import CFooter from './../CFooter/CFooter.jsx';

const SCUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
const SCLimit = styled.div`
    width: 100%;
	max-width: 975px;
`

export default class CUser extends React.Component {
    render() {
        return(
            <SCUser>
                <SCLimit>
                    <CProfile />
                    <CSections />
                    <CPosts />
                    <CFooter />
                </SCLimit>
            </SCUser>
        )
    }
}