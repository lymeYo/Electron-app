import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import mainPageReducer from "./reducers/mainPage/mainPageReducer";
import placeRequestsReducer from "./reducers/placeRequests/placeRequestsReducers"
import findRequestsReducer from "./reducers/findRequests/findRequestsReducers"

const reducers = combineReducers({
  mainPage: mainPageReducer,
  findRequests: findRequestsReducer,
  placeRequests: placeRequestsReducer,
})

const store = createStore(
  reducers,
  composeWithDevTools()
)

export default store