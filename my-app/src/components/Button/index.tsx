import React from "react";
import style from "./Button.module.scss";

export default function Button({type = "button", children, onClick}: {type?: "button" | "submit" | "reset" | undefined, children: React.ReactNode, onClick?: () => void}) {
  return (
    <button type={type} onClick={onClick} className={style.botao} >
      {children}
    </button>
  );
}

