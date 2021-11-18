import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTicketStatus, getTicketsAdmin } from "../../../../redux/actions/actions";
import TicketsReady from "../TicketsReady/TicketsReady";

const TicketProcess = () => {
    const dispatch = useDispatch();
    const { ticket } = useSelector(state => state.admin);
    
    
    useEffect(() => {
        dispatch(getTicketsAdmin())
    }, [dispatch, ticket])

    const handleClick = () => {
        dispatch(changeTicketStatus({changeState: true, id: ticket._id}))
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
                                <h3>Estado: {ticket.estado}</h3>
                            </div>
                        )
                        : <div>Nada para procesar</div>
                }
                <TicketsReady/>
            </div>
            <button disabled={!ticket} onClick={handleClick}>ENVIAR A PROCESAR</button>
        </div>
    )
}

export default TicketProcess; 