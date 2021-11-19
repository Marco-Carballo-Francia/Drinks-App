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
    GET_TICKETS_ADMIN,
    CHANGE_TICKET_STATUS,
    LOGIN_LOCAL,
    CHANGE_USER_ROLE,
    GET_USERS,
    CREATE_ITEM,
    EDIT_DATE_PROFILE,
    DELETE_ITEM,
    GET_ADMIN_ITEMS,
    SET_ITEM,
    DELETE_CART_ALL,
    DELETE_CART_ONE,
    UPDATE_ITEM,
    GET_PRODUCTS_FAVORITOS
} from './const';


export const getProducts = ({ name, category }) => async (dispatch) => {
    try {
        const res = await axios.get(`/items?name=${name ? name : ""}&category=${category ? category : ""}`);
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
        const res = await axios.get(`/items/${id}`);

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
        let categories = await axios.get("/categoria");
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
        let res = await axios.put(`/items/update/${id}`, { number })
        console.log(res.data)
        return dispatch({
            type: RATE_PRODUCT,
        })
    }
    catch (error) {
        console.log(error)
    }
}

export const addCart = (itemCart, id) => async (dispatch)=> {
    try{

        let res= await axios.patch(`/users/user/edit/${id}`, {itemCart} )
        console.log(res.data);
        dispatch({
            type: ADD_CART,
            payload: res.data
        })
        return dispatch(getCart(id))

    }
    catch(error){
        console.log(error)
    }
}

export const getCart = (userId) => async (dispatch) =>{
    
        try{
            let res = await axios.get(`/users/user/${userId}`)
            console.log(res.data);
            return dispatch({
                type: GET_CART,
                payload: res.data
            })
        }   


        catch(error){
            console.log(error);
        }
}


export const deleteCartItem = (id) => {
    return {
        type: DELETE_CART_ITEM,
        payload: id
    }
}


export const deleteCartOne = (itemsId, userId) => async (dispatch) =>{
    try{
        console.log("find", itemsId)
        let res = await axios.put(`/users/user/deleteX/${userId}`, {itemsId} )
        dispatch({
            type: DELETE_CART_ONE,
            payload: res.data
        })
        return dispatch(getCart(userId))
    }
    catch(error){
        console.log(error);
    }
}


export const deleteCartAll = (userId) => async (dispatch) =>{
    try{
        let res = await axios.put(`/users/user/deleteAll/${userId}`) 
        return dispatch({
            type: DELETE_CART_ALL,
            payload: res.data
        })
    }
    catch(error){
        console.log(error);
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
        const res = await axios.post("/users/user/register", values)
        return dispatch({
            type: "REGISTER_LOCAL",
            payload: res.data
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const loginLocal = input => async (dispatch) => {
    try {
        const res = await axios.post("/users/user/login", input)
        return dispatch({
            type: LOGIN_LOCAL,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
};

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
        const tickets = (await axios.get(`/ticket/user/${id}`)).data
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

export const datosDeCompra = (payload) => {
    return {
        type: DATOS_COMPRA,
        payload
    }
}

export const getTicketsAdmin = () => async (dispatch) => {
    try {
        const { data } = (await axios.get(`/ticket/state`))
        return dispatch({
            type: GET_TICKETS_ADMIN,
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}

export const changeTicketStatus = ({changeState, id}) => async (dispatch) => {
    try {
        const tickets = await axios.put(`/ticket/state/update/${id}`, {changeState})
        return dispatch({
            type: CHANGE_TICKET_STATUS,
            payload: tickets.data // esto tiene que venir como un objeto { pending: [{}, {}...], processing: [{}, {}...] }
        })
    }
    catch (error) {
        console.log(error)
    }
}


export const checkout = () => {
    return {
        type: "CHECK_USER"
    }
}

export const changeUserRole = ({ id, changeRol }) => async (dispatch) => {

    try {
        await axios.put(`/users/admin/update/${id}`, { changeRol })
        return dispatch(getUsers({}))
    }
    catch (error) {
        console.log(error)
    }
}

export const getUsers = ({ nombre }) => async (dispatch) => {
    try {
        const users = (await axios.get(`/users/admin/users?nombre=${nombre ? nombre : ""}`)).data;
        return dispatch({
            type: GET_USERS,
            payload: users
        })
    }
    catch (error) {
        console.log(error)

    }
}

export const editDateProfile = (id, values) => async (dispatch) => {
    try {
        const res = (await axios.patch(`/users/user/edit/${id}`, values)).data
        return dispatch({
            type: EDIT_DATE_PROFILE,
            payload: res
        })
    }
    catch (error) {
        console.log(error)
    }
}

export const createItem = (item) => async (dispatch) => {
    try {
        const {data} = (await axios.post(`/items/create`, item))
        return dispatch({
            type: CREATE_ITEM,
            payload: data

        })
    }
    catch (error) {
        console.log(error)
    }
}

export const deleteItem = (id) => async (dispatch) => {
    try{
        const deleteItem = (await axios.delete(`/items/delete/${id}`)).data
        return dispatch({
            type: DELETE_ITEM,
            payload: deleteItem
        })
    }
    catch (err){
        console.log(err)
    }
}

export const getAdminItems = ({name, category}) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/items?name=${name ? name : ""}&category=${category ? category : ""}`)
        return dispatch({
            type: GET_ADMIN_ITEMS,
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}

export const setItem = (id) => async (dispatch) =>{
    try{
        const { data } = await axios.get(`/items/${id}`)
        return dispatch ({
            type: SET_ITEM,
            payload: data
        })
    }
    catch(error){
        console.log(error)
    }
}


export const updateItem = ({id, object}) => async (dispatch) => {
    try {
        const {data} = await axios.put(`/items/update/${id}`, object)
        return dispatch({
            type: UPDATE_ITEM,
            payload: data
        }) 
    } catch (error) {
        console.log(error) 
    }
}   


export const createCategory = (nombre) => async (dispatch) => {
    try {
        await axios.post("/categoria/create", {nombre})
        return dispatch(getCategories())
    } catch (error) {
        console.log(error)       
    }
}

export const updateCategory = ({ id, nombre }) => async () => {
    try {
        await axios.put(`/categoria/update/${id}`, {nombre})
    } catch (error) {
        console.log(error)
    }
}

export const getFavoritos = (id) => async (dispatch) => {
    try {
        // console.log('id de favoritos', id);
        const res = await axios.get(`/users/user/favoritos/${id}`);
        console.log('res.data', res.data);
        return dispatch({
            type: GET_PRODUCTS_FAVORITOS,
            payload: res.data 
        })
    } catch (error) {
        console.log(error);
    }
}

export const addFavoritos = ({id, itemsId}) => async () => {
    console.log('id user', id);
    console.log('id item', id);
    try {
        await axios.put(`/users/user/add/favoritos/${id}`, {itemsId})
    } catch (error) {
        console.log(error);
    }
}

export const deleteFavoritos = ({id, itemsId}) => async () => {
    try {
        await axios.put(`/users/user/delete/favoritos/${id}`, {itemsId})
    } catch (error) {
        console.log(error);
    }
}