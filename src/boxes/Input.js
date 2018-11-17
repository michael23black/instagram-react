import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withSize from 'react-sizeme';

const Box = styled.div`
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
	cursor: pointer;
`
const Search = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 3px 26px;
    background-color: initial;
    border: none;
    font-size: 14px;
    z-index: 3;
    cursor: default;
`
const Image = styled.div`
    opacity: ${props => props.active 
        ? '1' : '0'
    };
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 26px;
    height: 26px;
    pointer-events: none;
`
const ImageLeft = styled(Image)`
    left: 0px;
    background: url(${props => props.url}) no-repeat 50% 50%;
`
const ImageRight = styled(Image)`
    right: 0px;
    background: url(${props => props.url}) no-repeat 50% 50%; 
`
const Inner = styled.div`
    display: ${props => props.active 
        ? 'none' : 'flex'
    };
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
    background: url(${props => props.url}) no-repeat 50% 50%;
`
const Text = styled.div`
    font-size: 14px;
    color: #999999;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 20px);
`

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content : 'Поиск',
            focus : false,
            inputValue: ''
        };
        this.focusInput = this.focusInput.bind(this);
        this.blurInput = this.blurInput.bind(this);
        this.deleteContent =this.deleteContent.bind(this);
    } 
    deleteContent(event) {
        const {width} = this.props.size;
        const xpos = event.nativeEvent.offsetX;
        if (width - xpos <= 26){
            this.blurInput();
            this.inputText.blur();
        }
    }
    focusInput() {
        this.inputText.value = this.state.inputValue;
        this.inputText.placeholder = 'Поиск';
        this.setState({
            focus : true
        });
    }
    blurInput() {
        if(this.inputText.value.length === 0){
            this.setState({
                content : 'Поиск',
                value : ''
            });
        }else{
            this.setState({
                content : this.inputText.value, 
                inputValue : this.inputText.value
            });
        }
        this.inputText.value = '';
        this.inputText.placeholder = '';
        this.setState({
            focus:false
        });
    }

    render() {
        return(
            <Box className={this.props.className}>
                <ImageLeft active={this.state.focus} url={this.props.findUrl} />
                <Search 
                    onClick={this.deleteContent}
                    onFocus={this.focusInput}
                    onBlur={this.blurInput}
                    ref={(input) => { this.inputText = input; }} 
                />
                <Inner active={this.state.focus}>
                    <InnerImage url={this.props.findUrl} />
                    <Text>
                        {this.state.content} 
                    </Text>
                </Inner>
                <ImageRight active={this.state.focus} url={this.props.deleteUrl} />
            </Box>
        )
    }
}

const propTypes = {
    active: PropTypes.bool,
    findUrl: PropTypes.string.isRequired,
    deleteUrl: PropTypes.string.isRequired
};

const defaultProps = {
    active: false
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
export default withSize()(Input);