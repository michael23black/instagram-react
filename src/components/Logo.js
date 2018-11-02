import React from 'react';
import styled from 'styled-components';


const Component =styled.div`
    margin-top: 7px;
    }
`
const Image = styled.img`
    height: 29px;
    width: 103px;
`

export default class Logo extends React.Component {
    render() {
        return(
            <Component className={this.props.className}>
                <Image src={this.props.url} />
            </Component>
        )
    }
}