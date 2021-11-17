import React from "react";
import { useHistory } from "react-router-dom";

const AdminStock = () => {
    
    const history = useHistory();

    const handleClick = (e) => {
        history.push(`/admin/stock/${e.target.name}`);
    }

    return (
        <div>
            <button name="update" onClick={handleClick}>
                Editar
            </button>
            <button name="create" onClick={handleClick}>
                Crear
            </button>
        </div>
    )
}

export default AdminStock;