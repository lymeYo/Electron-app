import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import React, { JSXElementConstructor } from "react"
import { useSelector } from "react-redux"
import { currentTabs } from "_/redux/reducers/mainPage/mainPageCreators"
import SettingsPage from "./SettingsPage/SettingsPage"

function PageContent(props: any) {
  const { curWindow }: any = useSelector(({ mainPage }: any) => ({
    curWindow: mainPage.currentTab,
  }))

  let ComponentOfTab: ReactJSXElement = <></>
  if ( curWindow == currentTabs.settings) ComponentOfTab = (<SettingsPage />)
  if (curWindow == currentTabs.dialogs) ComponentOfTab = <div>dialogs</div>;
  if (curWindow == currentTabs.requests) ComponentOfTab = <div>requests</div>;
  
  return (
    <div>
      { ComponentOfTab }
    </div>
  )
}

export default PageContent