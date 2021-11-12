import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserRole } from "../../../../redux/actions/actions"
import style from "./UserDetail.module.css";

const UserDetail = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.admin)
    const {id} = user;
    const handleClick = () => {
        dispatch(changeUserRole({ id, changeRol: true }));
    }

    return (
        <div>
            <h2>{user.id}</h2>
            <h2>{user.email}</h2>
            <button className={style.bo} onClick={handleClick}>Hacer Admin</button>
        </div>
    )



}




export default UserDetail;