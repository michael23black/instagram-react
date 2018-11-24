import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Counter from '../boxes/Counter.js';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 20px;
    align-items: center;

    @media all and (max-width:600px){
        justify-content: space-around;
        padding: 15px 0px;
		margin-bottom: 0px;
        border-top: 1px solid #efefef;
    }
`

const Counters = props => (
    <Container>
        <Counter count={props.subsInfo.publications} label="публикаций" />
        <Counter count={props.subsInfo.followers} label="подписчиков" />
        <Counter count={props.subsInfo.following} label="подписки" />
    </Container>
);

const propTypes = {
    subsInfo: PropTypes.object.isRequired
};

Counters.propTypes = propTypes;
export default Counters;