import {combineReducers} from "redux";
import tasksReducer from "./tasks/taskSlice";
import themeReducer from "./theme/themeSlice";


const rootReducer = combineReducers({
    tasks: tasksReducer,
    theme: themeReducer
    }
)

export default rootReducer;
