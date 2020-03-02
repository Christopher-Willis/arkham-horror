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
        temp[action.value]["chaosBag"]["initial"] = [...action.data.bag]
        return temp
    }
    if(action.type === "ADD_INVESTGATORS"){
        const temp = cloneDeep(state)
        if(temp[action.value]["investigators"]===undefined){
            temp[action.value]["investigators"] = {}
        }
        temp[action.value]["investigators"]["initial"] = [...action.data]        
        return temp
    }
    if(action.type === "ADD_PHYSICAL_TRAMA"){
        const temp = cloneDeep(state)
        if(temp[action.gameName]["physicalTrama"]===undefined){
            temp[action.gameName]["physicalTrama"] =[]
        }
        if(temp[action.gameName]["physicalTrama"][action.index] === undefined){
            temp[action.gameName]["physicalTrama"][action.index] = []
        }
        temp[action.gameName]["physicalTrama"][action.index][action.missionIndex]=action.value
        return temp
    }
    if(action.type === "ADD_MENTAL_TRAMA"){
        const temp = cloneDeep(state)
        if(temp[action.gameName]["mentalTrama"]===undefined){
            temp[action.gameName]["mentalTrama"] =[]
        }
        if(temp[action.gameName]["mentalTrama"][action.index] === undefined){
            temp[action.gameName]["mentalTrama"][action.index] = []
        }
        temp[action.gameName]["mentalTrama"][action.index][action.missionIndex]=action.value
        return temp
    }
    if(action.type === "ADD_TOTAL_XP"){
        const temp = cloneDeep(state)
        if(temp[action.gameName]["totalXP"]===undefined){
            temp[action.gameName]["totalXP"] =[]
        }
        if(temp[action.gameName]["totalXP"][action.index] === undefined){
            temp[action.gameName]["totalXP"][action.index] = []
        }
        temp[action.gameName]["totalXP"][action.index][action.missionIndex]=action.value
        return temp
    }
    if(action.type === "ADD_SPENT_XP"){
        const temp = cloneDeep(state)
        if(temp[action.gameName]["spentXP"]===undefined){
            temp[action.gameName]["spentXP"] =[]
        }
        if(temp[action.gameName]["spentXP"][action.index] === undefined){
            temp[action.gameName]["spentXP"][action.index] = []
        }
        temp[action.gameName]["spentXP"][action.index][action.missionIndex]=action.value
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