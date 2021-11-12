import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTicketStatus } from "../../../../redux/actions/actions";

const TicketProcess = () => {
    const dispatch = useDispatch();
    const { ticket } = useSelector(state => state.admin);

    const handleClick = () => {
        dispatch(changeTicketStatus({ state: "processing", id: ticket.id }))
        dispatch({ type: "DELETE_TICKET" })
    }

    return (


        <div>
            <div>
                {
                    ticket
                        ? <div>
                            <div>
                                <h2>{ticket.id}</h2>
                            </div>
                            <div>
                                Ticket Info
                            </div>
                        </div>
                        : <div>Nada para procesar</div>
                }
            </div>
            <button disabled={!ticket} onClick={handleClick}>ENVIAR A PROCESAR</button>
        </div>


    )
}

export default TicketProcess;