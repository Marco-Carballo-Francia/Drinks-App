import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const AdminButton = () => {

    const {user} = useSelector(state => state.user)
   

    return(
        <div> 
            { user?.admin ?
            <Link to="/admin"> 
            <button>Admin</button>
            </Link>
            :
             null
            }
        </div>
    ) 
}


export default AdminButton;
