import React from "react";
import AdminStockR from "./AdminStockR/AdminStockR";
import AdminStockCUD from "./AdminStockCUD/AdminStockCUD";

const AdminStock = () => {
    return (
        <div>
            <AdminStockR />
            <AdminStockCUD />
        </div>
    )
}

export default AdminStock;