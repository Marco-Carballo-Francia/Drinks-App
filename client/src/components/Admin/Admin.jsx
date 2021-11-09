import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Admin = () => {
    const history = useHistory();
    const [section, setSection] = useState("");

    const handleClick = (e) => {
        setSection(e.target.name);
        history.push(`/admin/${section}`)
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