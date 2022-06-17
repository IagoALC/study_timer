import style from "./Timer.module.scss";
import { secondsToHours } from "../../../common/date";

export default function Timer({timer = 0}: {timer: number}) {
  const timerArray = secondsToHours(timer);
  return (
    <>
      <span className={style.relogioNumero}>{timerArray[0]}</span>
      <span className={style.relogioNumero}>{timerArray[1]}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{timerArray[2]}</span>
      <span className={style.relogioNumero}>{timerArray[3]}</span>
    </>
  );
}
