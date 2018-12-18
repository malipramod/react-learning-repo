
import * as actionTypes from './actionsTypes';

export const saveResults = (value) => {
    // const updatedResult =value*2;
    return {
        type: actionTypes.STORE_RESULT,
        result: value
    }
}
export const storeResult = (value) => {
    return (dispatch,getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResults(value));
        }, 2000);
    }
}

export const deleteResult = (value) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: value
    }
}