// constants
export type userModeType = "create" | "find"

export enum currentTabs {
  requests = "requests",
  dialogs = "dialogs",
  settings = "settings",
}
export type currentTabType = "requests" | "dialogs" | "settings"

export enum mainPageOperations {
  SWITCH_TAB = "/mainPage/SWITCH_TAB",
  SET_NEW_DELETED_INPUT = "/mainPage/SET_NEW_DELETED_INPUT",
}

export const SET_NEW_DELETED_INPUT = "SET_NEW_DELETED_INPUT"
export type settingsTab = {
  deletedInputsId: Array<string>
}

//creators
export const changeTabRender = (tab: string) => ({
  type: mainPageOperations.SWITCH_TAB,
  tab,
})

export const renderDeletedInputId = (deletedId: string) => ({
  type: mainPageOperations.SET_NEW_DELETED_INPUT,
  deletedId,
})
