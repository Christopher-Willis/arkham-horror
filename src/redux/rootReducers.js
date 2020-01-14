import { combineReducers } from 'redux'



const games = (state=[], action) => {
    if(action.type === "ADD_GAME"){
        return [...state, action.value]
    }
    return state
}

const currentGame = (state={name:""}, action) => {
    if(action.type === "CHANGE_GAME"){
        if(action.value.name.length < 29){
            return action.value
        }
    }
    return state
}









const reducers = combineReducers({
    games,currentGame
})



export default reducers;