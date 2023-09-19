import { createStore , combineReducers , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restuarevvtReducer";


const reduces = combineReducers({
    restaurantListReducer
})

const middlewares = [thunk]

const store = createStore(reduces,applyMiddleware(...middlewares))

export default store