import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTicketsAdmin } from "../../../redux/actions/actions";
import TicketsPending from "./TicketsPending/TicketsPending";
import TicketProcess from "./TicketProcess/TicketProcess";
import style from "./AdminTickets.module.css";

const AdminTickets = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <h1 className={style.title}>Procesar Ordenes</h1>
             <TicketsPending />
             {/*<TicketProcess />*/}
        </div>
    )
}

export default AdminTickets;