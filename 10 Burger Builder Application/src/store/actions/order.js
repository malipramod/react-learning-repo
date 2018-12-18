import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
export const perchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const perchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const perchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}
export const perchaseBurger = (orderData,token) => {
    return dispatch => {
        dispatch(perchaseBurgerStart());
        axios.post('/orders.json?auth='+token, orderData)
            .then(response => {
                dispatch(perchaseBurgerSuccess(response.data.name, orderData));
            }).catch(error => {
                dispatch(perchaseBurgerFail(error));
            });
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrder = (token,userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams='?auth='+token+'&orderBy="userId"&equalTo="'+userId+'"';
        axios.get('orders.json'+queryParams).then(res => {
            const fetchOrders = [];
            for (let key in res.data) {
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchOrdersSuccess(fetchOrders));
        }).catch(err => {
            dispatch(fetchOrdersFail(err));
        })
    }
}