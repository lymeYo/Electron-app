import produce, { Draft } from "immer"
import { actionInterface } from "_/utils/constants"
import {
  mainPageOperations,
  userModeType,
  currentTabType,
  settingsTab,
} from "./mainPageCreators"
const {
  SWITCH_TAB,
  SET_NEW_DELETED_INPUT
} = mainPageOperations

interface initialStateInterface {
  userMode: userModeType
  currentTab: currentTabType
  settingsTab: settingsTab
  dialogsTab: Object
  requestsTab: Object
}

let initialState: initialStateInterface = {
  userMode: "find",
  currentTab: "settings",
  settingsTab: {
    deletedInputsId: []
  },
  dialogsTab: {

  },
  requestsTab: {

  },
}

const mainPageReducer = produce(
  (draft: Draft<initialStateInterface>, action: actionInterface) => {
    switch (action.type) {
      case SWITCH_TAB:
        draft.currentTab = action.tab
        break;
      case SET_NEW_DELETED_INPUT:
        draft.settingsTab.deletedInputsId.push(action.deletedId)
    }

    return draft;
  },
  initialState
);

export default mainPageReducer