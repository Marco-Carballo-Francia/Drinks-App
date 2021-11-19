import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserRole } from "../../../../redux/actions/actions"
import style from "./UserDetail.module.css";

const UserDetail = ({ closeModal }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.admin)
    const id = user._id;

    const handleClick = () => {
        dispatch(changeUserRole({ id, changeRol: true }));
        closeModal();
    }


    return (
        <div>
            <div>
                {
                    user.email
                        ?
                        (<div>
                            <p>{user.id}</p>
                            <p className={style.txt}>{user.email}</p>
                        </div>)
                        :
                        null

                }
            </div>
            <button className={style.btn} onClick={handleClick}>Aceptar</button>
        </div>
    )



}




export default UserDetail;