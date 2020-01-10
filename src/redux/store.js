import {createStore} from 'redux';
import rootReducers from "./rootReducers";


var store = createStore(rootReducers)

export default store;