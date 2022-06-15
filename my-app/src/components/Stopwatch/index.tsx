import Timer from "./Timer";
import Button from "../Button";
import style from "./Stopwatch.module.scss";

export default function Stopwatch() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}> Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Timer />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}
