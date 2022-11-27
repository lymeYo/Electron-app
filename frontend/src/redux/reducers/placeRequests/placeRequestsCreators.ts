import { descriptionItemIndicatorType } from "_/utils/constants"

//constants
export enum placeRequestsOperations {
  SET_PLACED_REQUEST = "placeRequests/SET_PLACED_REQUEST",
}


export interface descriptionItemInterface {
  indicator: descriptionItemIndicatorType
  text: string
}

export interface placedRequestInterface {
  parameters: {
    title: string
    imageSrc: string
    descriptionItems: descriptionItemInterface[]
  }
  id: string
}

//creators
export const setPlacedRequest = (request: placedRequestInterface) => ({
  type: placeRequestsOperations.SET_PLACED_REQUEST,
  request,
})