import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicketsAdmin } from "../../../../redux/actions/actions";


const TicketsPending = () => {

    const dispatch = useDispatch();
    const { ticketsPending } = useSelector((state) => state.admin)

    useEffect(() => {
        dispatch(getTicketsAdmin())
    }, [])

    const handleClick = () => {
        dispatch({ type: "SET_TICKET", payload: ticketsPending[0] })
    }

    return (
        <div>
            {ticketsPending &&
                ticketsPending.map((t) => (
                    <div key={t.id}>
                        <h2>{t.id}</h2>
                    </div>
                ))}
            <div>
                <button onClick={handleClick}>▶</button>
            </div>
        </div>
    )
}


export default TicketsPending;