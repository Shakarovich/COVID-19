import {useState} from 'react'
import styled from 'styled-components'

const Btn_styled = styled.input`
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  height:43px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;


:focus {
  outline: none;
}

:active {
  transform: scale(0.98);
}
  display: block;
  width: 100%;
`
const Form = styled.form`
  margin-bottom: 40px;
`
const Cont = styled.div`
  margin: 20px 0;

label {
  display: block;
}

input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
`
const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

label {
  flex: 1;
}

input {
  width: 40px;
  height: 20px;
  outline: none;
}
`

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder]= useState(false);

    const onSubmit=(e) =>{
          e.preventDefault();

          onAdd({ text, day, reminder})

          setText('')
          setDay('')
          setReminder(false)
    }


    return (
        <Form onSubmit={onSubmit}>
            <Cont className='form-control'>
                <label>Full name</label>
                <input
                  type='text'
                  placeholder='Add Full name'
                  value={text}
                  onChange={(e) => 
                    setText(e.target.value)
                  }
                  required
                  />
            </Cont>
            <Cont className='form-control'>
              <label>Day & Time</label>
              <input
                type='text'
                placeholder='Add Day & Time'  
                value={day}
                onChange={(e) => 
                  setDay(e.target.value)
                }
                required
              />
            </Cont>
            <Cont>
              <Check>
                <label>Have you saved your vaccination certificate?  </label>
                <input
                  type='checkbox' 
                  checked={reminder}
                  value={reminder} 
                  onChange={(e) => 
                    setReminder(e.currentTarget.checked)
                  }
                />
              </Check>
            </Cont>

            <Btn_styled
              type='submit'
              value='Click to add information'
              className='btn btn-block'
            />
        </Form>
    )
}

export default AddTask
