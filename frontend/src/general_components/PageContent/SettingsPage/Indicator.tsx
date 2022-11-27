import React from "react"

import styles from "./styles.module.scss"

function Indicator(props: any) {
  const clickHandler = () => {
    props.clickHandler()
  }

  return (
    <div className={styles[`indicator-wrapper`]}>
      <div
        onClick={clickHandler}
        className={styles[`indicator`] + " " + styles[`indicator-${props.type}`]}
      ></div>
    </div>
  )
}


export default Indicator