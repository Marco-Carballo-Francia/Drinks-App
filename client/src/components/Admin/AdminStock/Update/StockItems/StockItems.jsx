import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminItems, setItem } from "../../../../../redux/actions/actions"
import Loading from "../../../../../components/Loading/Loading";
import StockUpdate from "../StockUpdate/StockUpdate";
import style from "./StockItems.module.css";

const StockItems = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getAdminItems({})
    )}, [dispatch])
    

    const handleClick = (id) => {
        dispatch(setItem(id))
    }

    return (
        <div className={style.container}>
           {
                 items 
                    ? items.map(x => (
                        <button className={style.boton} key={x._id} onClick={() => handleClick(x._id)}>
                            {x.nombre}
                        </button>
                    ))
                    : ( <Loading /> ) 
            }
        </div>
    )
}

export default StockItems;