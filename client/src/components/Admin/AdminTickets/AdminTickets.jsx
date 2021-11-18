import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTicketsAdmin } from "../../../redux/actions/actions";
import TicketsPending from "./TicketsPending/TicketsPending";
// import TicketProcess from "./TicketProcess/TicketProcess";

const AdminTickets = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTicketsAdmin())
    }, [dispatch]);

    return (
        <div>
             <TicketsPending />
             {/*<TicketProcess />*/}
        </div>
    )
}

export default AdminTickets;