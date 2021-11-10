import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const TicketsPending = () => {

    const dispatch = useDispatch();
    const { ticketsPending } = useSelector((state) => state.admin)



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