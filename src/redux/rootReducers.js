import { combineReducers } from 'redux'
import cloneDeep from 'lodash/cloneDeep';
// clone deep hack because now I understand I should avoid deep states, lesson for next life



const games = (state={}, action) => {
    if(action.type === "ADD_GAME"){
        const temp = cloneDeep(state)
        temp[action.value] = {}
        return temp
    }
    if(action.type === "ADD_DEFAULT_CHAOS_BAG"){
        const temp = cloneDeep(state)
        temp[action.value]["chaosBag"]={}
        temp[action.value]["chaosBag"]["initial"] = {...action.data.bag}
        return temp
    }
    if(action.type === "ADD_INVESTGATORS"){
        const temp = cloneDeep(state)
        if(temp[action.value]["investigators"]==undefined){
            temp[action.value]["investigators"] = {}
        }
        temp[action.value]["investigators"]["initial"] = [...action.data]
        return temp
    }
    return state
}

const currentGame = (state={gameName:""}, action) => {
    if(action.type === "CHANGE_GAME_NAME"){
        if(action.value.length < 29){
            return {...state,gameName:action.value}
        }
    }
    return state
}









const reducers = combineReducers({
    games,currentGame
})



export default reducers;