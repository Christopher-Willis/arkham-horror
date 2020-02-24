export function ChangeCurrentGame(gameName){
  return {
    type:"CHANGE_GAME_NAME",
    value:gameName,
  }
  }

export function AddNewGame(gameName){
  return {
    type:"ADD_GAME",
    value:gameName,
  }
}

export function AddChaosBag(gameName,bagData){
  return{
    type:"ADD_DEFAULT_CHAOS_BAG",
    value:gameName,
    data:bagData
  }
}

export function AddInvestigators(gameName,investigatorData){
  return{
    type:"ADD_INVESTGATORS",
    value:gameName,
    data:investigatorData
  }
}


export function addPhysicalTrama(gameName,value,index,missionIndex){
  return{
    type:"ADD_PHYSICAL_TRAMA",
    gameName:gameName,
    value:value,
    index:index,
    missionIndex:missionIndex
  }
}

export function addMentalTrama(gameName,value,index,missionIndex){
  return{
    type:"ADD_MENTAL_TRAMA",
    gameName:gameName,
    value:value,
    index:index,
    missionIndex:missionIndex
  }
}

export function addTotalXP(gameName,value,index,missionIndex){
  return{
    type:"ADD_TOTAL_XP",
    gameName:gameName,
    value:value,
    index:index,
    missionIndex:missionIndex
  }
}

export function addSpentXP(gameName,value,index,missionIndex){
  return{
    type:"ADD_SPENT_XP",
    gameName:gameName,    
    value:value,
    index:index,
    missionIndex:missionIndex
  }
}