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
                Productos en Stock
            </button>
            <button className={style.btn} name="create" onClick={handleClick}>
                Crear Producto
            </button>
            <button className={style.btn} name="tickets" onClick={handleClick}>
                Ordenes
            </button>
            <button className={style.btn} name="users" onClick={handleClick}>
                Usuarios
            </button>
        </div>

    )
}

export default Admin;