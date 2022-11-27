import produce, { Draft } from "immer"
import { actionInterface } from "_/utils/constants"
// const { SWITCH_TAB, SET_NEW_DELETED_INPUT } = requestOperations
// import {} from "./requestCreators"

interface initialStateInterface {
}

let initialState: initialStateInterface = {
  
}

const findRequestsReducer = produce(
  (draft: Draft<initialStateInterface>, action: actionInterface) => {
    switch (action.type) {
      
    }

    return draft
  },
  initialState
)

export default findRequestsReducer