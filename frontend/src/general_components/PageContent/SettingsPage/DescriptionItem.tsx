import React from "react"
import { IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

import Indicator from "./Indicator"
import InputElem from "./InputElem"
import { descriptionItemIndicatorEnum, descriptionItemIndicatorType } from "_/utils/constants"

import styles from "./styles.module.scss"


function IndicatorsList(props: any) {
  let handleChangeIndicator = (
    indicatorStatus: descriptionItemIndicatorType
  ) => {
    props.handleChangeIndicator(indicatorStatus)
  }

  let indicatorNames = [
    descriptionItemIndicatorEnum.NEED,
    descriptionItemIndicatorEnum.PERMISSIVE,
    descriptionItemIndicatorEnum.OPTIONALLY,
    descriptionItemIndicatorEnum.NONE,
  ]

  let list: any = indicatorNames.map(
    (name: descriptionItemIndicatorType, ind: number) => (
      <Indicator
        clickHandler={() => {
          handleChangeIndicator(name)
        }}
        type={name}
        key={ind}
      />
    )
  )

  return <>{list}</>
}

function DescriptionItem(props: any) {
  const deleteItem = () => {
    props.deleteItem(props.id)
  }
  const changeItem = (text: string, indicator: descriptionItemIndicatorType) => {
    props.changeItem(text, indicator)
  }

  let [isBoxOpen, setBoxOpen] = React.useState(false)

  let handleChangeIndicator = (
    indicatorStatus: descriptionItemIndicatorType
  ) => {
    setBoxOpen(!isBoxOpen)
    changeItem(props.text, indicatorStatus)
  }

  const handleChangeText = (newText: string) => {
    changeItem(newText, props.indicator)
  }

  let handlerBoxOpen = () => {
    setBoxOpen(!isBoxOpen)
  }
  return (
    <>
      {props.deleted ? (
        ""
      ) : (
        <div className={styles["description-item"]}>
          <Indicator
            clickHandler={handlerBoxOpen}
            isSelected={true}
            type={props.indicator}
          />
          <div
            style={{ display: isBoxOpen ? "" : "none" }}
            className={styles["indicator-change-box"]}
          >
            <IndicatorsList handleChangeIndicator={handleChangeIndicator} />
          </div>
          <InputElem setNewValue={handleChangeText} value={props.text} />
          <div className={styles["delete-btn-wrapper"]}>
            <IconButton onClick={deleteItem}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      )}
    </>
  )
}


export default DescriptionItem