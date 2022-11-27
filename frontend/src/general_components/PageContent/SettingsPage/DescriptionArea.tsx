import React from "react"
import { IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import AddIcon from "@mui/icons-material/Add"

import styles from "./styles.module.scss"
import { renderDeletedInputId } from "_/redux/reducers/mainPage/mainPageCreators"
import DescriptionItem from "./DescriptionItem"
import { descriptionItemIndicatorType } from "_/utils/constants"

function ItemFromData(props: any) {
  const dispatch = useDispatch()
  const { deletedInputsId }: any = useSelector(({ mainPage }: any) => ({
    deletedInputsId: mainPage.settingsTab.deletedInputsId,
  }))
  
  const [itemText, setItemText] = React.useState("")
  const changeItem = (newText: string, indicator: descriptionItemIndicatorType) => {
    props.changeItem(newText, indicator, props.id)
    setItemText(newText)
  }

  const deleteItem = (id: string): any => {
    props.deleteItem(id)
    // dispatch(renderDeletedInputId(id))
  }

  if (props.isDeleted) {
    return <></>
  }

  return (
    <DescriptionItem
      indicator={props.indicator}
      deleteItem={deleteItem}
      text={itemText}
      changeItem={changeItem}
      id={props.id}
      key={props.id}
    />
  )
}

function DescriptionArea(props: any) {
  const dispatch = useDispatch()

  const itemsList = props.curDataList.map((data: any, ind: number) => (
    <ItemFromData
      deleteItem={props.deleteItem}
      isDeleted={data.isDeleted}
      indicator={data.indicator}
      changeItem={props.changeItem}
      text={data.text}
      id={data.id}
    />
  ))

  return (
    <div className={styles.description}>
      <div className={styles.prefix}>Описание:</div>
      <div className={styles["description-list"]}>
        {itemsList}
        <div onClick={props.addItemInList} className={styles["description-item-add"]}>
          <IconButton>
            <AddIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default DescriptionArea