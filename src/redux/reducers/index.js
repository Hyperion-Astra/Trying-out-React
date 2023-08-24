import { combineReducers } from "redux";
import rootReducer from "./rootReducer";
import blogReducer from "./blogReducer";

const allReducers = combineReducers({
    blog: blogReducer,
    root: rootReducer
})

export default allReducers;