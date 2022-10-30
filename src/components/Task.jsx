import React, { useState } from "react";

function Task({ todo, remove, update, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.taskTitle);
    const [task, setTask] = useState(todo.taskText);

  
    const handleClick = evt => {
        remove(evt.target.id);
    };

    const toggleFrom = () => {
        setIsEditing(!isEditing);
    };

    const handleUpdate = evt => {
        evt.preventDefault();
        update(todo.id, title, task);
        toggleFrom();
    };

    const handleChangeTitle = evt => {
        setTitle(evt.target.value);
    };

    const handleChangeTask = evt => {
        setTask(evt.target.value);
    };


    const toggleCompleted = evt => {
        toggleComplete(evt.target.id);
    };

    let result;

    if(todo.completed) {
        result = (
                <div className="card-done">
                    <div className="col s12 m12">
                        <div className="card grey lighten-3">
                            <div className="card-content black-text">
                                <span className="card-title">{todo.taskTitle}</span>
                                <p>{todo.taskText}</p>
                            </div>
                            <div className="card-action">
                                <div className="waves-effect waves-light grey darken-2 btn btn-line" id={todo.id} onClick={toggleCompleted}>Undone</div>
                                <div className="waves-effect waves-light grey darken-2 btn btn-line" id={todo.id} onClick={handleClick}>Remove Task</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    } else if(!todo.completed) {
        result = (
                <div className="">
                    <div className="col s12 m12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <button className="icon-edit" >
                                    <i className="material-icons" title="Edit Task" id={todo.id} onClick={toggleFrom}>create</i>
                                </button>
                                <span className="card-title">{todo.taskTitle}</span>
                                <p>{todo.taskText}</p>
                            </div>
                            <div className="card-action">
                                <div className="waves-effect waves-light btn btn-line" id={todo.id} onClick={toggleCompleted}>Done</div>
                                <div className="waves-effect waves-light btn btn-line" id={todo.id} onClick={handleClick}>Remove Task</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
   if(isEditing) {
        result = (
            <div className="">
                <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <form onSubmit={handleUpdate}>
                                <input 
                                    id="taskTitle"
                                    name="taskTitle"
                                    type="text" 
                                    placeholder="Task Title" 
                                    className="input-title" 
                                    value={title}
                                    onChange={handleChangeTitle}
                                    />
                                <textarea 
                                    id="taskText"
                                    name="taskText"
                                    placeholder="Task Text" 
                                    className="input-task"
                                    value={task}
                                    onChange={handleChangeTask}
                                ></textarea>
                                <button className="waves-effect waves-light btn">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return result;
}

export {Task};