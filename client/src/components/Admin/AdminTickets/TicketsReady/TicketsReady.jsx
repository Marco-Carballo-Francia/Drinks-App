import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeTicketStatus} from "../../../../redux/actions/actions"

const TicketsReady = () => {

    const { ticketsReady } = useSelector(state => state.admin)
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(changeTicketStatus({status: "finished", id})) // va al back y cambia el status del ticket a finalizado (o loqsea)
    }

    return (
        <div>
            {
                ticketsReady?.length 
                    ?   <div>
                        {
                            ticketsReady.map(x => {
                                const { id } = x.id;
                                return 
                                    <div key={id}>
                                        <span>{id}</span>
                                        <button onClick={(id) => handleClick(id)}>Finalizar</button>
                                    </div>
                            })
                        }
                        </div> 
                    : <span>no hay tickets ready</span>
            }
        </div>
    )
}

export default TicketsReady;