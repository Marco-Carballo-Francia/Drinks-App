import React from "react";
import { useHistory } from "react-router";


const AdminTickets = () => {
    const history = useHistory();

    const handleClick = (e) => {
        history.push(`/admin/tickets/${e.target.name}`)
    }

    return (
        <div>
            <button name="procesar" onClick={handleClick}>Procesar</button>
            <button name="finalizar" onClick={handleClick}>Confirmar</button>
        </div>
    )
}

export default AdminTickets;