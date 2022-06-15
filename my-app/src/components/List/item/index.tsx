import { Itask } from "../../../types/task";
import style from "../List.module.scss";
export default function Item({ tasks }: {tasks: Itask}) {
  return (
    <li className={style.item}>
      <h3>{tasks.task}</h3>
      <span>{tasks.time}</span>
    </li>
  );
}
