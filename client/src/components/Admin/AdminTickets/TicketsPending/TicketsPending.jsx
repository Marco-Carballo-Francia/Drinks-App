import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicketsAdmin } from "../../../../redux/actions/actions";
import Loading from "../../../Loading/Loading";
import styles from "./TicketsPending.module.css";
import TicketProcess from "../TicketProcess/TicketProcess";

const TicketsPending = () => {

    const dispatch = useDispatch();
    const { ticketsPending } = useSelector((state) => state.admin)

    useEffect(() => {
        dispatch(getTicketsAdmin())
    }, [dispatch])

    const handleClick = () => {
        dispatch({ type: "SET_TICKET", payload: ticketsPending[0] })
    }

    return (
        <div className={styles.container}>
            <div>
            {
                ticketsPending.length 
                ? 
                
                    <div>
                    {
                        ticketsPending.map((t) => {
                            return (
                                <div className={styles.ticket} key={t._id}>
                                    <h2>Fecha: {t.fecha}</h2>
                                    <h2>Usuario: {t.user.nombre}</h2>
                                    <h3>Estado: {t.state}</h3>
                                </div>
                            )
                        })
                    }
                    </div>
                
                :
                (
                    <Loading />
                )
            }
            </div>
            <div>
                <button onClick={handleClick}>▶</button>
            </div>
            <TicketProcess />
        </div>
    )
}


export default TicketsPending;