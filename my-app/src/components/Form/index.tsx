import React, { useState } from "react";
import { Itask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";


export default function Form({setTasks, tasks} : {setTasks: React.Dispatch<React.SetStateAction<Itask[]>>, tasks: Itask[] | []}) {
  const [taskForm, setTaskForm] = useState({task: '', time: ''});

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks([...tasks, {task: taskForm.task, time: taskForm.time}]);
  }

  function inputHandler(event: any) {
    console.log(event.target.value);
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
        <input type="time" step="1" name="time" id="time" value={taskForm.time} onChange={inputHandler} min="00:00:00"  max="01:30:00" required />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

// class Form extends React.Component<{setTasks: React.Dispatch<React.SetStateAction<Itask[]>>}> {
//   state = {
//     task: "",
//     time: ""
//   }

//   addTask(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     this.props.setTasks(oldTasks => [...oldTasks, {...this.state}]);
    
//   }
//   render() {
//     return (
//       <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
//         <div className={style.inputContainer}>
//           <label htmlFor="task">Adicione um novo estudo</label>
//           <input type="text" name="task" id="task" value={this.state.task} onChange={(event) => {this.setState({...this.props, task: event.target.value})}} placeholder="O que você quer estudar" required />
//         </div>
//         <div className={style.inputContainer}>
//           <label htmlFor="time">Time</label>
//           <input type="time" step="1" name="time" id="time" value={this.state.time} onChange={(event) => {this.setState({...this.props, time: event.target.value})}} min="00:00:00"  max="01:30:00" required />
//         </div>
//         <Button type="submit">Adicionar</Button>
//       </form>
//     );
//   }
// }

// export default Form;