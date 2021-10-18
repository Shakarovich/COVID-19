import Proptypes from 'prop-types';
import styled from 'styled-components';

const Btn_style = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
`

const Button = ({color, text, onClick}) =>{
    return(
        <Btn_style
            onClick={onClick}
            style={{backgroundColor:color}}
            className='btn'
        >
            {text}
        </Btn_style>
        ) 
} 

Button.defaultProps= {
    color:'steelblue'
}


Button.propTypes={
    text:Proptypes.string,
    color:Proptypes.string,
    onClick:Proptypes.func.isRequired,
}
export default Button;