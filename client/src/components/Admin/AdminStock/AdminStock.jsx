import React from "react";
import StockItems from "./Update/StockItems/StockItems";
import StockUpdate from "./Update/StockUpdate/StockUpdate";
import { useHistory } from "react-router-dom";

const AdminStock = () => {
    
    const history = useHistory();

    const handleClick = (e) => {
        history.push(`/admin/stock/${e.target.name}`);
    }

    return (
        <div>
            <button name="update" onClick={handleClick}>
                Update
            </button>
            <button name="create" onClick={handleClick}>
                Create
            </button>
        </div>
    )
}

export default AdminStock;