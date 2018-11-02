import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import CHeader from './CHeader.js';
import CUser from './CUser.js';

const SCMain = styled.div`

`
const links = { 
    footer : [
        {label: 'о нас', href: '#'},
        {label: 'поддержка', href: '#'},
        {label: 'пресса', href: '#'},
        {label: 'api', href: '#'},
        {label: 'вакансии', href: '#'},
        {label: 'конфеденциальность', href: '#'},
        {label: 'условия', href: '#'},
        {label: 'директория', href: '#'},
        {label: 'профили', href: '#'},
        {label: 'хэштеги', href: '#'},
        {label: 'язык', href: '#'},
    ],
};
export default class CMain extends React.Component {
    render() {
        return(
            <SCMain>
                <CHeader />
                <CUser links={links}/>
            </SCMain>
        )
    }
}