const intitialState = {
    counter:0
}

function reducers(state=intitialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {counter:state.counter + 1};
        case 'INCREMENT':
            return {counter:state.counter - 1};
        default:
            return state;
    }
}



export default reducers;