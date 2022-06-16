import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { Itask } from "../types/task";
import style from "./App.module.scss";
function App() {
  const [tasks, setTasks] = useState<Itask[] | []>([]);
  const [selected, setSelected] = useState<Itask>();
  function taskSelected(task: Itask) {
    setSelected(task);
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} tasks={tasks}/>
      <Stopwatch />
      <List tasks={tasks} taskSelected={taskSelected}/>
    </div>
  );
}

export default App;
