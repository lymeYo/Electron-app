import React from "react"
import styles from "./styles.module.scss";

import { CREATEQUERYTYPE } from '_/utils/constants'

function QueriesController(props: any) {
  const titleText = props.type == CREATEQUERYTYPE ? "Создать запрос" : "Найти запрос";
  const postfix = props.type == props.curActiveBlock ? styles.active : styles.disactive
  
  
  return (
    <div onClick={props.onClickFunc} className={`${styles.query} ${postfix}`}>
      <div className={styles.title}>{titleText}</div>
    </div>
  );
}

export default QueriesController