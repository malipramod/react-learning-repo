import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const intialState = {
    orders: [],
    loading: false,
    purchased: false
}

const perchaseBurgetStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const perchaseBurgetSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId
    };
    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
    });
}

const perchaseBurgetFail = (state, action) => {
    return updateObject(state, { loading: false });
}

const perchaseBurgetInit = (state, action) => {
    return updateObject(state, { purchased: false });
}

const fetchOrderStart = (state, action) => {
    return updateObject(state, { loading: true });
}
const fetchOrderSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
}
const fetchOrderFail = (state, action) => {
    return updateObject(state, { loading: false });
}


const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return perchaseBurgetStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return perchaseBurgetSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL:
            return perchaseBurgetFail(state, action);
        case actionTypes.PURCHASE_INIT:
            return perchaseBurgetInit(state, action);
        case actionTypes.FETCH_ORDERS_START:
            return fetchOrderStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return fetchOrderSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrderFail(state,action);
        default:
            return state;
    }
};

export default reducer;