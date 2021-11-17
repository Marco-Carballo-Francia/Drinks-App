import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import style from './Admin.module.css';

const Admin = () => {
    const history = useHistory();

    const handleClick = (e) => {
        history.push(`/admin/${e.target.name}`)
    }

    return (
        <div className={style.ctnSup}>
            <button className={style.btn} name="stock" onClick={handleClick}>
                Stock
            </button>
            <button className={style.btn} name="tickets" onClick={handleClick}>
                Tickets
            </button>
            <button className={style.btn} name="users" onClick={handleClick}>
                Users
            </button>
        </div>
    )
}

export default Admin;