import { Itask } from "../../../types/task";
import style from "../List.module.scss";

export default function Item({tasks, taskSelected}: {tasks: Itask, taskSelected: (selected: Itask) => void}) {
  return (
    <li className={style.item} onClick={()=>{taskSelected(tasks)}}>
      <h3>{tasks.task}</h3>
      <span>{tasks.time}</span>
    </li>
  );
}
