import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTicketStatus, getTicketsAdmin } from "../../../../redux/actions/actions";

const TicketProcess = () => {
    const dispatch = useDispatch();
    const { ticket } = useSelector(state => state.admin);
    
    const handleClick = () => {
        dispatch(changeTicketStatus({state: "processing", id: ticket._id}))
        dispatch({type: "DELETE_TICKET"})
        dispatch(getTicketsAdmin());
    }

    return (
        <div>
            <div>
                {
                    ticket?.fecha
                        ? (
                            <div>
                                <h2>Usuario: {ticket.user.nombre}</h2>
                                <h2>Fecha: {ticket.fecha}</h2>
                                <h3>Estado: {ticket.state}</h3>
                            </div>
                        )
                        : <div>Nada para procesar</div>
                }
            </div>
            <button disabled={!ticket} onClick={handleClick}>ENVIAR A PROCESAR</button>
        </div>
    )
}

export default TicketProcess;