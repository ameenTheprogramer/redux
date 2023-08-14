

import { createStore } from "redux";
import { redusers } from "./redusers/index";

const store = createStore(redusers, {},  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store