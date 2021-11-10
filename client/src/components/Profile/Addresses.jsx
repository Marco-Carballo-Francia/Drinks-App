import React from 'react';
import style from './Styles/Addresses.module.css'
import { BsPencilSquare } from "react-icons/bs";

function Addresses() {

    return (
        <div className={style.data}>
            <h3 className={style.titlePrin}> Mis direcciones <BsPencilSquare className={style.icon}/></h3>
            
        </div>
    )
}

export default Addresses;