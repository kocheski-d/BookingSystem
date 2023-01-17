import { combineReducers } from "redux";
import resourceReducer from "./resourceReducers/resourceReducer";
import bookingReducer from "./bookingReducers/bookingReducer";

export default combineReducers({
    resources: resourceReducer,
    booking: bookingReducer
});