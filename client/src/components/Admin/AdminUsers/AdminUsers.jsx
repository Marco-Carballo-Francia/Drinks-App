import React, { useState } from "react";
import UserDetail from "./UserDetail/UserDetail";
import UsersList from "./UsersList/UsersList";

const AdminUsers = () => {
    return (
        <div>
            <UsersList/> 
            <UserDetail/>
        </div>
    )
}

export default AdminUsers;