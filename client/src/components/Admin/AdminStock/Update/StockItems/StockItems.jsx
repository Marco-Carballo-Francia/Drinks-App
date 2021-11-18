import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminItems, setItem } from "../../../../../redux/actions/actions"
import Loading from "../../../../../components/Loading/Loading";
import StockUpdate from "../StockUpdate/StockUpdate";
import style from "./StockItems.module.css";
import { BsPencilSquare} from "react-icons/bs";
import Modal from 'react-modal';
import Table from 'react-bootstrap/Table'

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
        dispatch(getAdminItems({ name: e.target.value }));
    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#000000',
            padding: '10px 40px 10px 40px',
        },
    };

    return (
        <div>

            <div className={style.ctnInput}>
                <p className={style.textImput}> Buscar por nombre</p>
                <input className={style.imput} type="text" value={input} onChange={handleChange} />
            </div>
            <div className={style.ctnTabla} >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className={style.table1} >Imagen</th>
                            <th className={style.table1}>Nombre</th>
                            <th className={style.table1}>Precio</th>
                            <th className={style.table1} >Descripcion</th>
                            <th className={style.table1}>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !items.length
                                ? (<Loading />)
                                : items ? items.map(x => {
                                    return (
                                        <tr className={style.font}>
                                            <td className={style.table2} ><img className={style.img} src={x.imagen} alt="" /></td>
                                            <td className={style.table2}>{x.nombre}</td>
                                            <td className={style.table2}>{x.precio}</td>
                                            <td className={style.table2}> {x.descripcion}</td>
                                            <td className={style.table2}><BsPencilSquare className={style.icon} key={x._id} onClick={() => handleClick(x._id)} /></td>
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
                    <button className={style.x} onClick={closeModal}>x</button>
                    <StockUpdate />
                </Modal>
            </div>
        </div>
    )
}

export default StockItems;