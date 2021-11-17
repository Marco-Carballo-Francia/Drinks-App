import React from "react";
import StockItems from "./StockItems/StockItems";
import style from "./Update.module.css";
import Modal from 'react-modal'

const Update = () => {
    return (
        <div className={style.container}>
            <StockItems />
        </div>
    )
}

export default Update;