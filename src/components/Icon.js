import React from 'react';
import styled from 'styled-components';


const Component = styled.img`
    height: 24px;
    width: 24px; 
`

const Icon = ({url, className}) => {
    return(
        <Component 
            className={className} 
            src={url}
        />
    )
};

export default Icon;
