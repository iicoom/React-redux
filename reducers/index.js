import todos from "./todo"
import visibleFilter from "./visibleFilter"
import { combineReducers } from "redux"

const todoApp = combineReducers({
    todos,
    visibleFilter
})

export default todoApp