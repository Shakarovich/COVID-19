import PropTypes from 'prop-types';
import Button from './Button';
import styled from 'styled-components'

const Header_style = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`


const Header = ({title, onAdd, showAdd }) => {
    return (
        <Header_style>
            <h1>{title}</h1>
            <Button 
                onClick={onAdd}
                color={showAdd ? 'green' : 'red'} 
                text={showAdd ? 'Opened' : 'Closed'}
            />
        </Header_style>
       
    )
}

Header.defaultProps = {
    title:'If you took the vaccination then fill out the form',
  }

  Header.propTypes= {
      title:PropTypes.string,
  }

export default Header;
