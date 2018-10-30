import React from 'react';
import styled from 'styled-components';

import CProfile from './CProfile.js';
import CSections from './CSections.js';
import CPosts from './CPosts.js';
import CFooter from './CFooter.js';

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