import React from "react"
import { useDispatch, useSelector } from "react-redux"

import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import { IconButton } from "@mui/material"
import { FINDQUERYTYPE } from "_/utils/constants"

import styles from "./styles.module.scss"
import { changeTabRender } from "_/redux/reducers/mainPage/mainPageCreators"

function NavItem(props: any) {
  const classForActiveItem = props.isActive ? "active" : ""
  const clickHandler = () => {
    props.changeTab(props.tabName)
  }

  return (
    <div
      onClick={clickHandler}
      className={styles.item + " " + styles[classForActiveItem]}
    >
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}

function MainAppBar(props: any) {
  // const curWindow = FINDQUERYTYPE //!Реализовать логику вытаскивания состояния окна из редакса (создать запрос - create, найти откликнуться - find)
  const dispatch = useDispatch()
  const { curWindow, currentTab }: any = useSelector(({ mainPage }: any) => ({
    curWindow: mainPage.userMode,
    currentTab: mainPage.currentTab,
  }))

  const navItemsTitles =
    curWindow == FINDQUERYTYPE
      ? ["Объявления", "Диалоги", "Настройки Объявления"]
      : ["Объявления", "Диалоги", "Настройки Объявления"]

  const navItemsNameForTitles: any = {
    "Объявления": "requests",
    "Диалоги": "dialogs",
    "Настройки Объявления": "settings",
  }

  const changeTab = (tabName: string) => {
    dispatch(changeTabRender(tabName))
    // setCurItemId(id)
  }
  
  
  const itemsList = navItemsTitles.map((title, ind) => {
    let isActive = (currentTab == navItemsNameForTitles[title])
    console.log(currentTab, navItemsNameForTitles[title], " - ")

    return (
      <NavItem
        changeTab={changeTab}
        isActive={isActive}
        id={ind}
        key={ind}
        title={title}
        tabName={navItemsNameForTitles[title]}
      />
    )
  })

  return (
    <div className={styles.appbar}>
      <div className={styles["drawer-icon"]}>
        <IconButton onClick={props.toggleDrawer}>
          <MenuOpenIcon />
        </IconButton>
      </div>

      <div className={styles["nav-list"]}>{itemsList}</div>
    </div>
  )
}

export default MainAppBar
