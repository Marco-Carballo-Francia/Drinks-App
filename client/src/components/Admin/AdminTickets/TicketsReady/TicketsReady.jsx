import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeTicketStatus, getTicketsAdmin} from "../../../../redux/actions/actions"

const TicketsReady = () => {

    const { ticketsProcessing, ticket } = useSelector(state => state.admin)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTicketsAdmin());
    }, [dispatch, ticket]);

    const handleClick = (id) => {
        dispatch(changeTicketStatus({changeState: true, id}));
    };

    return (
        <div>
            {
                ticketsProcessing?.length 
                    ?   <div>
                        {
                            ticketsProcessing.map(x => {
                                const id = x._id;
                                return (
                                    <div key={id}>
                                        <span>{x.fecha}</span>
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