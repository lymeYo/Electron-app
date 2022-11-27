import produce, { Draft } from "immer"
import { actionInterface, descriptionItemIndicatorType } from "_utils/constants"
import { placedRequestInterface, placeRequestsOperations } from "./placeRequestsCreators"
// const { SWITCH_TAB, SET_NEW_DELETED_INPUT } = requestOperations
// import {} from "./requestCreators"


const {
  SET_PLACED_REQUEST
} = placeRequestsOperations




interface initialStateInterface {
  placedRequests: placedRequestInterface[]
}

let initialState: initialStateInterface = {
  placedRequests: []
}

const placeRequestsReducer = produce(
  (draft: Draft<initialStateInterface>, action: actionInterface) => {
    switch (action.type) {
      case SET_PLACED_REQUEST:
        const { id, title, imageSrc, descriptionItems } = action.request
        let newRequest: any = {}
        newRequest.id = id
        newRequest.parameters = {
          title,
          imageSrc,
          descriptionItems,
        }
        // newRequest.title = title
        // newRequest.imageSrc = imageSrc
        // newRequest.descriptionItems = descriptionItems
        draft.placedRequests.push(action.request)
    }

    return draft
  },
  initialState
)

export default placeRequestsReducer