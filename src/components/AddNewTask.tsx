import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { List, Task } from "../store/types";
import { addTask, setNotification } from "../store/actions";

interface AddNewTaskProps {
  list: List;
}

const AddNewTask: FC<AddNewTaskProps> = ({ list }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setTaskName(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (taskName === "") {
      return alert("Task name is required!");
    }

    const newTask: Task = {
      name: taskName,
      id: `task-${new Date().getTime()}`,
      completed: false,
    };

    dispatch(addTask(newTask, list));
    dispatch(setNotification(`New task created("${newTask.name}")!`));
    setTaskName("");
  };

  return (
    <section className='section'>
      <h2 className='is-size-4 has-text-centered'>
        Add new task to selected list
      </h2>
      <form id='task-form' onSubmit={submitHandler}>
        <div className='field'>
          <label className='label'>Task Name</label>
          <div className='control'>
            <input
              type='text'
              className='input'
              placeholder='Add Task'
              value={taskName}
              onChange={inputChangeHandler}
            />
          </div>
          <div className='control mt-4'>
            <input
              type='submit'
              value='Add New Task'
              className='button is-primary'
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddNewTask;
