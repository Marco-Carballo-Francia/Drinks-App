import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../redux/actions/actions";
import style from "./UsersList.module.css";

const UsersList = () => {

    const [input, setInput] = useState();
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getUsers({}))
    }, [dispatch])

    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value);
        dispatch(getUsers({ nombre: value }))
    }

    return (

        <div>
            <input className={style.input} type="text" value={input} onChange={(e) => handleChange(e)} />
            <div>
                {
                    users?.map(x => (
                        <div>
                            <p>{x.nombre}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UsersList;