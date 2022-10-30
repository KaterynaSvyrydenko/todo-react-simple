import { useReducer } from "react";
import {v4 as uuid} from "uuid"; 

function FormTask({ createTodo, handleFormShow }) {

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            taskTitle: "",  
            taskText: ""
        }
    );

    const handleChange = evt => {
        setUserInput({ [evt.target.name]: evt.target.value });
    };


    const handleSubmit = evt => {
        evt.preventDefault();
        handleFormShow();
        const newTodo = { id: uuid(), taskTitle: userInput.taskTitle, taskText: userInput.taskText, completed: false };
        createTodo(newTodo);
        setUserInput(
            { 
                taskTitle: "",
                taskText: "" 
            });
    };


    return <div className="form-wrap">
        <h1>ADD TASK</h1> 
        <form onSubmit={handleSubmit}>
            <input 
                id="taskTitle"
                name="taskTitle"
                type="text" 
                placeholder="Task Title" 
                className="input-title" 
                value={userInput.taskTitle}
                onChange={handleChange}
                />
            <textarea 
                id="taskText"
                name="taskText"
                placeholder="Task Text" 
                className="input-task"
                value={userInput.taskText}
                onChange={handleChange}
            ></textarea>
            <button className="waves-effect waves-light btn">Add Task</button>
        </form>
    </div>
}

export {FormTask};