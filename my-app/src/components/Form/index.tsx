import React, { useState } from "react";
import { Itask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";
import {UUID} from 'uuid-generator-ts';


export default function Form({setTasks, tasks} : {setTasks: React.Dispatch<React.SetStateAction<Itask[]>>, tasks: Itask[] | []}) {
  const [taskForm, setTaskForm] = useState({task: '', time: ''});

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const uuid = new UUID();
    setTasks([...tasks, {task: taskForm.task, time: taskForm.time, selected: false, completed: false, id: uuid.getDashFreeUUID()}]);
    setTaskForm({task: '', time: ''});
  }

  function inputHandler(event: any) {
    setTaskForm({...taskForm, [event.target.name]: event.target.value});
  }
  return(
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input type="text" name="task" id="task" value={taskForm.task} onChange={inputHandler} placeholder="O que você quer estudar" required />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input type="time" step="1" name="time" id="time" value={taskForm.time} onChange={inputHandler} min="00:00:00"  max="10:00:00" required />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}