import { Itask } from "../../../types/task";
import style from "./Item.module.scss";

export default function Item({tasks, taskSelected}: {tasks: Itask, taskSelected: (selected: Itask) => void}) {
  return (
    <li className={`${style.item} ${tasks.selected ? style.itemSelecionado : ''}`} onClick={()=>{taskSelected(tasks)}}>
      <h3>{tasks.task}</h3>
      <span>{tasks.time}</span>
    </li>
  );
}
