import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Admin = () => {
    const history = useHistory();

    const handleClick = (e) => {
        history.push(`/admin/${e.target.name}`)
    }

    return (
        <div>
            <button name="stock" onClick={handleClick}>
                Stock
            </button>
            <button name="tickets" onClick={handleClick}>
                Tickets
            </button>
            <button name="users" onClick={handleClick}>
                Users
            </button>
        </div>
    )
}

export default Admin;