import Timer from "./Timer";
import Button from "../Button";
import style from "./Stopwatch.module.scss";
import { HoursToSeconds } from "../../common/date";
import { useEffect, useState } from "react";
import { Itask } from "../../types/task";

export default function Stopwatch({selected,}: {selected: Itask | undefined;}) {
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    if (selected?.time) setTimer(parseInt(HoursToSeconds(selected.time)));
  }, [selected]);
  function countdown(counter: number = 0 ) {
    setTimeout(() => {
      if (counter > 0) {
        setTimer(counter - 1);
        return countdown(counter - 1);
      }
    }, 1000);
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Timer timer={timer} />
      </div>
      <Button onClick={() => countdown(timer)}>Começar!</Button>
    </div>
  );
}
