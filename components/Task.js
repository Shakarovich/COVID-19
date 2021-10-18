import {FaTimes} from 'react-icons/fa'
import styled from 'styled-components'

const Task_styles = styled.div`
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-left: ${props => props.reminder ? ' 5px solid green' : ''};
h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
` 

const Task = ({ task, onDelete, onToggle }) => {
    return (
      <Task_styles reminder={task.reminder}
          onDoubleClick={()=> onToggle(task.id)}>
          <h3>{task.text} { ' ' }
            <FaTimes style={
            {color:'red', cursor:'pointer'}}
            onClick={() => onDelete(task.id)}/>
          </h3>
          <p>{task.day}</p>
      </Task_styles>
    )
}

export default Task

