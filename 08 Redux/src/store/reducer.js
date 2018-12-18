
import * as actionType from './actions.js'
const intialState = {
    counter: 0,
    results: []
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case  actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case  actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case  actionType.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case  actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case  actionType.DELETE_RESULT:
            //const id = 2;
            // const newArray =[...state.results];
            // newArray.splice(id,1);
            const updatedArray = state.results.filter(result => result.id!==action.resElId);
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }

}

export default reducer;