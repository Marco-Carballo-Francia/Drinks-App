import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import style from './Admin.module.css';

const Admin = () => {
    const [click, setClick] = useState(false);
    const history = useHistory();
    const { user } = useSelector(state => state.user)

    const handleClick = (e) => {
        setClick(true);
        history.push(`/admin/${e.target.name}`)
    }

    return (
        <div>
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
            {!click ? <h1>Bienvenido {user?.nombre} a tu panel de administrador!</h1> : null}
        </div>

    )
}

export default Admin;