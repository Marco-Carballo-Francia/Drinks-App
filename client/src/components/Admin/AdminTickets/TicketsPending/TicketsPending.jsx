import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTicketsAdmin, changeTicketStatus } from "../../../../redux/actions/actions";
import Loading from "../../../Loading/Loading";
import styles from "./TicketsPending.module.css";
import TicketProcess from "../TicketProcess/TicketProcess";
import { BsArrowRightCircle } from "react-icons/bs";

const TicketsPending = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTicketsAdmin())
    }, [])

    const { ticketsPending } = useSelector((state) => state.admin)

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
                                    <h2 className={styles.user}>Orden de usuario {t.user.nombre.charAt(0).toUpperCase() +  t.user.nombre.slice(1)}</h2>
                                    <h2 className={styles.fecha}>Fecha: {t.fecha}</h2>
                                    <h3 className={styles.estado}>Estado: {t.estado}</h3>
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
                <button className={styles.btnGo} onClick={handleClick}><BsArrowRightCircle className={styles.iconoGo} /></button>
            </div>
        
            <TicketProcess  />
        </div>
    )
}


export default TicketsPending;