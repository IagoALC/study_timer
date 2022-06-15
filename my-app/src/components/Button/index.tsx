import React from "react";
import style from "./Button.module.scss";

export default function Button({type = "button", children}: {type?: "button" | "submit" | "reset" | undefined, children: React.ReactNode}) {
  return (
    <button type={type} className={style.botao} >
      {children}
    </button>
  );
}

