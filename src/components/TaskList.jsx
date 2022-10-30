import {Task} from "./Task";
import {FormTask} from "./FormTask";
import {CreateTask} from "./CreateTask";
import { useState } from "react";


function TaskList() {
    const [tasks, setTask] = useState([]);
    
      const create = newTask => {
        setTask([...tasks, newTask]);
      };
    
      const remove = id => {
        setTask(tasks.filter(task => task.id !== id));
      };
    
      const update = (id, updtedTitle, updtedTask) => {
        const updatedTodos = tasks.map(task => {
          if (task.id === id) {
            return { ...task, taskText: updtedTask, taskTitle: updtedTitle };
          }
          return task;
        });
        setTask(updatedTodos);
      };
    
      const toggleComplete = id => {
        const updatedTodos = tasks.map(task => {
          if (task.id === id) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        setTask(updatedTodos);
      };

      const [isFormShow, setFormShow] = useState(false);

      const handleFormShow = () => {
          setFormShow(!isFormShow);
      }

      const todosList = tasks.map(todo => (
        <Task
          toggleComplete={toggleComplete}
          update={update}
          remove={remove}
          key={todo.id}
          todo={todo}
        />
      ));
    

    return <div>
        {
            !isFormShow && 
            <CreateTask handleFormShow={handleFormShow} />
        }
        {
            isFormShow && 
            <FormTask handleFormShow={handleFormShow} createTodo={create} />
        }

        {todosList}
    </div>
}

export {TaskList};