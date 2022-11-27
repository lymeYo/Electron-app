import React from "react"

import styles from "./styles.module.scss"

function ImagesArea(props: any) {
  let temporarySrc = "https://plastlands.ru/1/min_1496395651-74966[1].jpg" // !from REDUX

  let inputFileRef: React.RefObject<HTMLInputElement> = React.createRef()
  let handlerInputFileClick = () => {
    inputFileRef.current?.click()
  }

  React.useEffect(() => {
    let changeHandler = (event: any) => {
      const reader = new FileReader()
      reader.onload = (readEvent: any) => {
        props.renderImageSrc(readEvent.target.result)
      }
      reader.readAsDataURL(event?.target?.files[0])
    }
    
    let fileExpansions = ".png,.jpg,.jpeg"
    inputFileRef.current?.setAttribute("accept", fileExpansions)  
    inputFileRef.current?.addEventListener("change", changeHandler)
  }, [])

  return (
    <div className={styles["image-area"]}>
      <div className={styles.image}>
        <img src={props.imageSrc} />
      </div>
      <button onClick={handlerInputFileClick} className={styles.options}>Изменить картинку</button>
      <input ref={inputFileRef} type="file" />
    </div>
  )
}


export default ImagesArea