import React from 'react';
import styled from 'styled-components';

import Post from './../../components/Post/Post.jsx';

import Image1 from './p/1.png';
import Image2 from './p/2.png';
import Image3 from './p/3.png';
import Image4 from './p/4.png';
import Image5 from './p/5.png';
import Image6 from './p/6.png';
import Image7 from './p/7.png';
import Image8 from './p/8.png';
import Image9 from './p/9.png';
import Image10 from './p/10.png';
import Image11 from './p/11.png';
import Image12 from './p/12.png';
import Image13 from './p/13.png';
import Image14 from './p/14.png';
import Image15 from './p/15.png';
import Image16 from './p/16.png';
import Image17 from './p/17.png';

const SCPosts = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 0px 20px;

    @media all and (max-width:600px){
		margin: 0px;
	}
`

export default class CPosts extends React.Component {
    render() {
        return(
            <SCPosts>
               <Post image={Image1} likes='100k' comments='945'/>
               <Post image={Image2} likes='100k' comments='450'/>
               <Post image={Image3} likes='100k' comments='143'/>
               <Post image={Image4} likes='100k' comments='65'/>
               <Post image={Image5} likes='100k' comments='655'/> 
               <Post image={Image6} likes='100k' comments='99'/>
               <Post image={Image7} likes='100k' comments='656'/>
               <Post image={Image8} likes='100k' comments='213'/>
               <Post image={Image9} likes='100k' comments='145'/>
               <Post image={Image10} likes='100k' comments='83'/>
               <Post image={Image11} likes='100k' comments='445'/>
               <Post image={Image12} likes='100k' comments='843'/>
               <Post image={Image13} likes='100k' comments='156'/>
               <Post image={Image14} likes='100k' comments='444'/>
               <Post image={Image15} likes='100k' comments='378'/>
               <Post image={Image16} likes='100k' comments='144'/>
               <Post image={Image17} likes='100k' comments='967'/>
            </SCPosts>
        )
    }
}