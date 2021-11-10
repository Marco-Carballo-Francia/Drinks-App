import React from 'react';
import { useSelector } from "react-redux";
import style from './Styles/Dates.module.css'

function Dates() {
    const { user } = useSelector((state) => state.user);

    return (
        <div className={style.ctn} >
            <div className={style.data}>
                <p className={style.title} >Nombre:</p>
                <p className={style.user}>{user.nombre ? user.nombre : user.user.nombre} </p>
            </div>
            <div className={style.data}>
                <p className={style.title} >Apellido:</p>
                {/* <p className={style.user}>{user.apellido ? user.apellido : user.user.apellido} </p> */}
            </div>
            <div className={style.data}>
                <p className={style.title} >Email:</p>
                <p className={style.user}>{user.email ? user.email : user.user.email}</p>
            </div>
            <div className={style.data}>
                <p className={style.title} >Documento:</p>
                <p className={style.user}></p>
            </div>
            <div className={style.data}>
                <p className={style.title} >Telefono:</p>
                <p className={style.user}></p>
            </div>
        </div>

    )
}

export default Dates;