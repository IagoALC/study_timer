import style from "./List.module.scss";
import Item from "./item";
import { Itask } from "../../types/task";

function List({tasks, taskSelected}: {tasks: Itask[],taskSelected: (selected: Itask) => void}) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} tasks={item} taskSelected={taskSelected}/>
        ))}
      </ul>
    </aside>
  );
}

export default List;
