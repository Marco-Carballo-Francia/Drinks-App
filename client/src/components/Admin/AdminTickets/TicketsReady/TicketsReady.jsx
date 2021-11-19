import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTicketStatus, getTicketsAdmin } from "../../../../redux/actions/actions"
import style from './TicketsReady.module.css';
import Modal from 'react-bootstrap/Modal';
import { BsCheck2Square } from "react-icons/bs";

const TicketsReady = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { ticketsProcessing, ticket } = useSelector(state => state.admin)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTicketsAdmin());
    }, [dispatch, ticket]);

    const handleClick = (id) => {
        dispatch(changeTicketStatus({ changeState: true, id }));
        handleShow();
        setTimeout(handleClose, 3000);
    };

    return (
        <div className={style.ctn}>
            {
                ticketsProcessing?.length
                    ? <div>
                        {
                            ticketsProcessing.map(x => {
                                const id = x._id;
                                return (
                                    <div key={id}>
                                        <div className={style.ticket}>
                                            <h2 className={style.user}>Usuario: {x?.user?.nombre.charAt(0).toUpperCase() + x?.user?.nombre.slice(1)}</h2>
                                            <h2 className={style.fecha}>Fecha: {x?.fecha}</h2>
                                            <h3 className={style.estado}>Estado: {x?.estado}</h3>
                                        </div>
                                        <button className={style.btn} onClick={() => handleClick(id)}>FINALIZAR ORDEN</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : <p className={style.noHay}> No hay tickets listos para finalizar</p>
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className={style.modalHead} closeButton1>
                    <h1 className={style.titleModal}>Estado Finished<BsCheck2Square className={style.iconModal} /></h1>
                </Modal.Header>
                <p className={style.textModal}>La orden se despacho correctamente</p>
            </Modal>

        </div>
    )
}

export default TicketsReady;