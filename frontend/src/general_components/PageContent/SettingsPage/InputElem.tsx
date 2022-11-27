import React from "react"
import { IconButton, TextField } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"

import styles from "./styles.module.scss"
import { useDispatch } from "react-redux"
import { InputInfoMessages } from "_/utils/constants"

function InputElem(props: any) {
  function renderDocumentListeners() {
    const documentClickHandler = (event: any) => {
      const isTargetInput: boolean = Boolean(
        event?.target?.closest("#title-change")
      )

      if (!isTargetInput) disactiveEditMode()
    }
    const documentKeyHandler = (event: any) => {
      const isEnterDown = event.key == "Enter"

      if (isEnterDown) disactiveEditMode()
    }
    document.addEventListener("click", documentClickHandler)
    document.addEventListener("keydown", documentKeyHandler)

    return () => {
      document.removeEventListener("click", documentClickHandler)
      document.removeEventListener("keydown", documentKeyHandler)
    }
  }

  const onChangeRender = (MUIItem: any) => {
    renderValue(MUIItem.target.value)
    if (props.onChange) props.onChange()
  }

  let renderValue: any = (newValue: string) => {
    props.setNewValue(newValue)
  }

  const [isValueValid, setValueValid] = React.useState(true)

  const [isEdit, setEdit] = React.useState(false)
  const activeEditMode = () => {
    setEdit(true)
  }
  const disactiveEditMode = () => {
    if (props?.value.length <= 0) {
      setValueValid(false)
    } else {
      setValueValid(true)
    }

    setEdit(false)
  }
  
  React.useEffect(renderDocumentListeners, [])
  
  
  return (
    <div id={"title-change"} className={styles["title-change"]}>
      {isValueValid ? (
        ""
      ) : (
        <div className={styles["info-message"]}>
          {InputInfoMessages.incorrectLengthData}
        </div>
      )}
      <TextField
        color="secondary"
        className={styles["title-input"]}
        id={props.id || ""}
        value={props.value}
        onChange={onChangeRender}
        disabled={!isEdit}
        multiline
        maxRows={6}
        autoFocus
      />
      <IconButton onClick={activeEditMode}>
        <EditIcon
          style={{
            fontSize: "medium",
          }}
        />
      </IconButton>
    </div>
  )
}

export default InputElem
