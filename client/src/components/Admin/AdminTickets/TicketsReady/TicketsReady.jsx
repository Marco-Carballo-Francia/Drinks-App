import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeTicketStatus, getTicketsAdmin} from "../../../../redux/actions/actions"

const TicketsReady = () => {

    const { ticketsProcessing } = useSelector(state => state.admin)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTicketsAdmin());
    }, [dispatch]);

    const handleClick = (id) => {
        dispatch(changeTicketStatus({changeState: true, id})); // va al back y cambia el status del ticket a finalizado (o loqsea)
    };

    return (
        <div>
            {
                ticketsProcessing?.length 
                    ?   <div>
                        {
                            ticketsProcessing.map(x => {
                                const  id  = x._id;
                                return (
                                    <div key={id}>
                                        <span>{id}</span>
                                        <button onClick={() => handleClick(id)}>Finalizar</button>
                                    </div>
                                )
                            })
                        }
                        </div> 
                    : <span>no hay tickets listos para finalizar</span>
            }
        </div>
    )
}

export default TicketsReady;