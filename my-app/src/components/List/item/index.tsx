import { Itask } from "../../../types/task";
import style from "./Item.module.scss";

export default function Item({tasks, taskSelected}: {tasks: Itask, taskSelected: (selected: Itask) => void}) {
  console.log(tasks);
  return (
    <li className={`${style.item} ${tasks.selected ? style.itemSelecionado : ''} ${tasks.completed ? style.itemCompletado: ''}`} onClick={()=>{!tasks.completed && taskSelected(tasks)}}>
      <h3>{tasks.task}</h3>
      <span>{tasks.time}</span>
      {tasks.completed && <span className={style.concluido} aria-label="Task Completed"></span>}
    </li>
  );
}
