import {combineReducers} from "redux";
import seriesReducer from "./SeriesReducer";

const reducer = combineReducers({
    series:seriesReducer,
})
export default reducer