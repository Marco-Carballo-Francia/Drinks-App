import React from "react";
import StockItems from "./StockItems/StockItems";
import StockUpdate from "./StockUpdate/StockUpdate";
import style from "./Update.module.css";

const Update = () => {
    return (
        <div className={style.container}>
            <StockItems />
            <StockUpdate />
        </div>
    )
}

export default Update;