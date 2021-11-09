import axios from 'axios';
import {
    GET_PRODUCTS_DETAILS,
    GET_PRODUCTS,
    GET_CATEGORIES,
    UNMOUNT_GET,
    SET_PAGE,
    SET_CATEGORY,
    RATE_PRODUCT,
    ADD_CART,
    GET_CART,
    DELETE_CART_ITEM,
    SET_MODAL,
    CREATE_TICKET,
    GET_TICKETS,
    LOGIN_GOOGLE,
    SET_TOTAL,
    DATOS_COMPRA,
} from './const';


export const getProducts = ({ name, category }) => async (dispatch) => {
    try {
        const res = await axios.get(`/user/items?name=${name ? name : ""}&category=${category ? category : ""}`);
        return dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};

export const getProductsDetails = (id) => async (dispatch) => {
    try {
        const res = await axios.get("/user/items/" + id);

        return dispatch({
            type: GET_PRODUCTS_DETAILS,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
};

export const getCategories = () => async (dispatch) => {
    try {
        let categories = await axios.get("/user/items/categories");
        return dispatch({
            type: GET_CATEGORIES,
            payload: categories.data
        });
    }
    catch (error) {
        console.log(error);
    }
};

export const unmountGet = () => ({ type: UNMOUNT_GET });

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
};

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    }
};

export const rateProduct = ({ number, id }) => async (dispatch) => {
    try {
        let res = await axios.put(`/user/items/update/${id}`, { number })
        console.log(res.data)
        return dispatch({
            type: RATE_PRODUCT,
        })
    }
    catch (error) {
        console.log(error)
    }
}

export const addCart = (payload, cantidad) => {
    return {
        type: ADD_CART,
        cantidad: cantidad,
        payload
    }
}

export const getCart = () => {
    return {
        type: GET_CART
    }
};


export const deleteCartItem = (id) => {
    return {
        type: DELETE_CART_ITEM,
        payload: id
    }
}

export const setModal = (modal) => {
    return {
        type: SET_MODAL,
        payload: modal
    }
}

export const loginGoogle = (obj) => async (dispatch) => {
    try {
        const res = await axios.post("/users/user/google", obj)
        return dispatch({
            type: LOGIN_GOOGLE,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const registerLocal = (values) => async (dispatch) => {
    try {
        const res = await axios.post("/users/user/register", values )
        return dispatch({
            type: "REGISTER_LOCAL",
            payload: res.data
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const createTicket = (value) => async (dispatch) => {
    try {
        const res = await axios.post("/ticket/checkout", value)
        return dispatch({
            type: CREATE_TICKET,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getUserTickets = (id) => async (dispatch) => {
    try {
        const tickets = (await axios.get(`/ticket/history/${id}`)).data
        return dispatch({
            type: GET_TICKETS,
            payload: tickets
        })
    }
    catch (error) {
        console.log(error)
    }
}

export const setTotal = (total) => {
    return {
        type: SET_TOTAL,
        payload: total
    }
}

export const datosCompra = (payload) => {
    return {
        type: DATOS_COMPRA,
        payload
    }
}