import React from 'react';
import { useSelector } from "react-redux";
import style from './Styles/Dates.module.css'
import { BsPencilSquare } from "react-icons/bs";

function Dates() {
    const { user } = useSelector((state) => state.user);

    return (
        <div className={style.ctn} >

            <div className={style.data}>
                <h3 className={style.titlePrin}>Mis datos <BsPencilSquare  className={style.icon}/></h3>

            </div>
            <div className={style.data}>
                <img className={style.img} src={user?.imagen ? user?.imagen : user?.imagen?.imagen} />
            </div>

            <div className={style.data}>
                <p className={style.title} >Nombre:</p>
                <p className={style.user}>{user?.nombre ? user?.nombre : user?.user?.nombre} </p>
            </div>
            <div className={style.data}>
                <p className={style.title} >Apellido:</p>
                <p className={style.user}>{user?.apellido ? user?.apellido : user?.user?.apellido} </p>
            </div>
            <div className={style.data}>
                <p className={style.title} >Email:</p>
                <p className={style.user}>{user?.email ? user?.email : user?.user?.email}</p>
            </div>
            <div className={style.data}>
                <p className={style.title} >Documento:</p>
                <p className={style.user}>{user?.docuemento ? user?.docuemento : user?.user?.docuemento} </p>
            </div>
            <div className={style.data}>
                <p className={style.title} >Telefono:</p>
                <p className={style.user}>{user?.telefono ? user?.telefono : user?.user?.telefono} </p>
            </div>
            <div className={style.data}>
                <p className={style.title} >Fecha de nacimiento:</p>
                <p className={style.user}> </p>
            </div>

        </div>


    )
}

export default Dates;