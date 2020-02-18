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