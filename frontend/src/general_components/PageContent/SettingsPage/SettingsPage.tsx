import React from "react"
import { Button, IconButton } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuid } from "uuid"

import InputElem from "./InputElem"
import ImagesArea from "./ImagesArea"
import DescriptionArea from "./DescriptionArea"
import DescriptionItem from "./DescriptionItem"
import { renderDeletedInputId } from "_/redux/reducers/mainPage/mainPageCreators"
import { descriptionItemInterface, placedRequestInterface, setPlacedRequest } from "_/redux/reducers/placeRequests/placeRequestsCreators"

import styles from "./styles.module.scss"
import { descriptionItemIndicatorEnum, descriptionItemIndicatorType } from "_/utils/constants"

function TitleArea(props: any) {
  const titleInputId = "title-input"
  const changeValue = (value: string) => {
    console.log("changeValue", value)
    props.renderValue(value)
  }

  return (
    <div className={styles.title}>
      <div className={styles.prefix}>Название:</div>
      <InputElem
        id={titleInputId}
        value={props.inputValue}
        setNewValue={changeValue}
      />
    </div>
  )
}

function SubmitButton(props: any) {
  const dispatch = useDispatch()
  
  const submitRender = () => {
    let descriptionDataItems: descriptionItemInterface[] = props.descriptionDataList.filter((data: any) => !data.isDeleted)

    let request: placedRequestInterface = {
      parameters: {
        title: props.title,
        imageSrc: props.imageSrc,
        descriptionItems: descriptionDataItems,
      },
      id: props.reuqestId,
    }
    dispatch(setPlacedRequest(request))
  }
  
  return (
    <div className={styles["submit-settings-button"]}>
      <Button onClick={submitRender} size="large" variant="contained" color="secondary">Готово</Button>
    </div>
  )
}

function SettingsPage(props: any) {
  const dispatch = useDispatch()
  const requestId = uuid()
  const [requestTitle, setRequestTitle] = React.useState("")
  const [imageSrc, setImageSrc] = React.useState("")

  const getDefaultDataItem = () => ({
    text: "",
    indicator: descriptionItemIndicatorEnum.NONE,
    id: uuid(),
    isDeleted: false,
  })
  const [descriptionDataList, setNewDescriptionDataList] = React.useState([getDefaultDataItem()])
  const changeInDataItem = (newText: string, indicator: descriptionItemIndicatorType,dataId: string) => {
    let newDescriptionDataList: any = descriptionDataList.map((data: any) => {
      if (data.id == dataId) {
        data.text = newText
        data.indicator = indicator
      }
      return data
    })
    setNewDescriptionDataList(newDescriptionDataList)
  }
  const addDataItemInDescriptionDataList: any = () => {
    setNewDescriptionDataList([
      ...descriptionDataList,
      getDefaultDataItem(),
    ])
  }
  const deleteDataItem = (dataId: string) => {
    let newDescriptionDataList: any = descriptionDataList.map((data: any) => {
      if (data.id == dataId) {
        data.isDeleted = true
      }
      return data
    })
    setNewDescriptionDataList(newDescriptionDataList)
  }
  
  return (
    <div className={styles.wrapper}>
      <ImagesArea renderImageSrc={setImageSrc} imageSrc={imageSrc} />
      <div className={styles.body}>
        <TitleArea inputValue={requestTitle} renderValue={setRequestTitle} />
        <DescriptionArea
          addItemInList={addDataItemInDescriptionDataList}
          changeItem={changeInDataItem}
          curDataList={descriptionDataList}
          deleteItem={deleteDataItem}
        />
      </div>
      <SubmitButton
        title={requestTitle}
        imageSrc={imageSrc}
        descriptionDataList={descriptionDataList}
        reuqestId={requestId}
      />
    </div>
  )
}


export default SettingsPage