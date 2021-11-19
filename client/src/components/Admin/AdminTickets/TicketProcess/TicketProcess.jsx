import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTicketStatus, getTicketsAdmin } from "../../../../redux/actions/actions";
import TicketsReady from "../TicketsReady/TicketsReady";
import style from './TicketProcess.module.css';


const TicketProcess = () => {
    const dispatch = useDispatch();
    const { ticket } = useSelector(state => state.admin);

    const handleClick = () => {
        dispatch(changeTicketStatus({ changeState: true, id: ticket._id }))
        dispatch({ type: "DELETE_TICKET" })
        dispatch(getTicketsAdmin());
    }

    return (
        <div>
            <div className={style.container}>
                {
                    ticket?.fecha
                        ? (
                            <div className={style.ticket}>
                                <h2 className={style.user}> Orden de usuario {ticket?.user?.nombre}</h2>
                                <h2 className={style.fecha}>Fecha: {ticket?.fecha}</h2>
                                <h3 className={style.estado}>Estado: {ticket?.estado}</h3>
                            </div>
                        )
                        : <p className={style.noHay}>Nada para procesar</p>

                }
                <button className={style.btn} disabled={!ticket} onClick={handleClick}>ENVIAR A PROCESAR</button>

                <TicketsReady />

            </div>

        </div>
    )
}

export default TicketProcess;