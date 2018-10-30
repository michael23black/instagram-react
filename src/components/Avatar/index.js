import React from 'react';
import styled from 'styled-components';

const SAvatar = styled.div` 

`
const SGradient = styled.a`
    padding: 3px; 
	background: linear-gradient(to top right, #f99e4c, #c82d8e); 
	border-radius: 50%;	
`
const SImage = styled.img`
    display:block;
	padding: 1px;
	border: 5px solid #efefef;
    border-radius: 50%;
    background: #e6e6e6;

@media all and (max-width:600px){
		border: 3px solid #efefef;
		width: 75px;
		height: 75px;
		min-width: 75px;
		min-height: 75px;	
	}
}
`

export default class Avatar extends React.Component {
    render() {
        return(
            <SAvatar>
                <SGradient>
                    <SImage src={this.props.imag}/>
                </SGradient>
            </SAvatar>
        )
    }
}