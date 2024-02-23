import style from "./blockHeader.module.scss";
import React from "react";

export function BlockHeader({ children }) {
  return <div className={style.block}>{children}</div>;
}
