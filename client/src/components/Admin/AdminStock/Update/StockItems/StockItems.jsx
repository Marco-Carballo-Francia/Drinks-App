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

    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
        dispatch(getAdminItems({name: e.target.value}));
    }

    return (
        <div className={style.container}>
            <input type="text" value={input} onChange={handleChange}/>
            <div>   
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
        </div>
    )
}

export default StockItems;