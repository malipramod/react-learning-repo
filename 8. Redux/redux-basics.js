const redux = require('redux');
const createStore = redux.createStore;

const intialState = {
    counter: 0
}
//Reducer
const rootReducer = (state = intialState, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + 10
        }
    }

    return state;
}

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('[subscription]',store.getState());
});

//Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());

