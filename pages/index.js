import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head'
import Header from '/components/Header';
import Tasks from '/components/Tasks';
import AddTask from '/components/AddTask'
import Loader from '../components/loader';
import Reject from '../components/reject';

const Container_styles = styled.div`
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  @media only screen and(max-width:420px){
    padding:20px;
    margin: 20px 20px;
  }
`

// simulate data
const data = [
  {
      id:1, 
      text:'Olimov Komil',
      day:'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
      id:2,
      text:'Alimov Azamat ',
      day:'Feb 6th at 1:30pm',
      reminder:false
  },
  {
      id:3,
      text:'Yaxshimuradov Otabek aka',
      day:'February 17th at 14:00',
      reminder:false
  },
]

export default function Home() {
  const [isOlder, setIsOlder] = useState(null);
  
  useEffect(() => {
    // ask user on load...
    const result = confirm('Have you  been vaccinated against Covid-19?');
    setIsOlder(result);
  }, []);

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(data);

  // Add Task
  const AddTasks = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => 
    task.id !==id))
  }
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
    tasks.map((task) => 
    task.id === id ? { ...task, reminder: 
    !task.reminder } : task))
  }

  // if page loading, returns spinner
  if (isOlder === null) return (
    <Loader/>
  )
  
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       {isOlder ?
       <Container_styles>
            <Header onAdd={() => 
            setShowAddTask(!showAddTask)} 
            showAdd={showAddTask}/>
            { showAddTask && <AddTask onAdd={AddTasks} />}
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks} 
                onDelete={deleteTask} 
                onToggle={toggleReminder}
              />
            ) : (
              'Information has been deleted'
            )}
        </Container_styles>
       : 
        <Reject/>
       }
    </>
  )
}
