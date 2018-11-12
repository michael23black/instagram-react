import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
    display: flex;
    position:relative;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 28px;
	background-color: #fafafa;
	border: 1px solid #dbdbdb;
	border-radius: 3px;
	cursor: text;
`
const Search = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 3px 26px;
    background-color: initial;
    border: none;
    font-size: 14px;
    z-index: 3;
`
const Image = styled.div`
    opacity: ${props => props.active ? '1' : '0'};/* а это и отвечает за исчезновение вот)*/
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 26px;
    height: 26px;
`
const ImageLeft = styled(Image)`
    left: 0px;
`
const ImageRight = styled(Image)`
    right: 0px;
    z-index: 4;
    cursor: default;
`
const Inner = styled.div`
    display: ${props => props.active ? 'none' : 'flex'};
    width: calc(100% - 52px);
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 26px;
`
const InnerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
`
const Text = styled.div`
    font-size: 14px;
    color: #999999;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 20px);
`
export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content : 'Поиск',
            focus : false,
            placeholder : '',
            value: ''
        };
        this.focusInput = this.focusInput.bind(this);
        this.blurInput = this.blurInput.bind(this);
        this.d = this.d.bind(this);
    } 
    d(event){
        //event.preventDefault();
        this.setState({
            value : '',
            content : 'Поиск'
        }); 
    }
    focusInput = () => {
        this.setState({focus : true});
        this.inputText.value = this.state.value;
        this.setState({placeholder : 'Поиск'});
    }
    blurInput(){
        if(this.inputText.value.length === 0){
            this.setState({content : 'Поиск'});
            this.setState({value : ''});
        }else{
            this.setState({content : this.inputText.value});
            this.setState({value : this.inputText.value});
        }
        this.inputText.value = '';
        this.setState({placeholder: ''});
        this.setState({focus:false});//'это строка которая скрывает кнопки на onblur'
    }//исчезает раньше чем клик

    render() {
        return(
            <Component onClick={() => this.d()} className={this.props.className}>
                <ImageLeft active={this.state.focus}>
                    <img src={this.props.findUrl}/>
                </ImageLeft>
                <Search 
                    onFocus={this.focusInput}
                    onBlur={() => this.blurInput()}
                    placeholder={this.state.placeholder}
                    ref={(input) => { this.inputText = input; }} 
                />
                <Inner active={this.state.focus}>
                    <InnerImage>
                        <img src={this.props.findUrl}/> 
                    </InnerImage>
                    <Text>
                        {this.state.content} 
                    </Text>
                </Inner>
                <ImageRight active={this.state.focus}>
                    <img
                     src={this.props.deleteUrl}
                     />
                </ImageRight>

            </Component>
        )
    }
}

