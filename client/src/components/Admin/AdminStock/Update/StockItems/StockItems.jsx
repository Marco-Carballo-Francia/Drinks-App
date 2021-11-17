import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminItems, setItem } from "../../../../../redux/actions/actions"
import Loading from "../../../../../components/Loading/Loading";
import StockUpdate from "../StockUpdate/StockUpdate";
import style from "./StockItems.module.css";
import Table from 'react-bootstrap/Table';
import { BsPencilSquare, BsXCircle } from "react-icons/bs";
import Modal from 'react-modal';

const StockItems = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.admin);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");

    useEffect(() => {
        dispatch(getAdminItems({})
        )
    }, [dispatch])

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleClick = (id) => {
        dispatch(setItem(id))
        openModal()
    }

    const handleChange = (e) => {
        setInput(e.target.value);
        dispatch(getAdminItems({name: e.target.value}));
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#000000',
            padding: '30px',
        },
    };

    return (
        <div className={style.ctnTabla} >
            <input type="text" value={input} onChange={handleChange}/>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th >Precio</th>
                        <th >Descripcion</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items
                            ? items.map(x => {
                                return (
                                    <tr className={style.font}>
                                        <td ><img className={style.img} src={x.imagen} alt="" /></td>
                                        <td>{x.nombre}</td>
                                        <td>{x.precio}</td>
                                        <td > {x.descripcion}</td>
                                        <td><BsPencilSquare className={style.icon} key={x._id} onClick={() => handleClick(x._id)} /></td>
                                    </tr>
                                )
                            }) : null
                    }
                </tbody>
            </Table>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className={style.btnx} onClick={closeModal}> <BsXCircle className={style.x} /></button>
                <StockUpdate />
            </Modal>
        </div>
    )
}

export default StockItems;