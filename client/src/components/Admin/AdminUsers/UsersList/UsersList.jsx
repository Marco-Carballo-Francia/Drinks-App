import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, changeUserRole } from "../../../../redux/actions/actions";
import style from "./UsersList.module.css";
import Modal from 'react-modal';
import UserDetail from '../UserDetail/UserDetail';
import Table from 'react-bootstrap/Table'

const UsersList = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState();
    const dispatch = useDispatch();
    const { users, user } = useSelector(state => state.admin);

    useEffect(() => {
        dispatch(getUsers({}))
    }, [dispatch])

    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value);
        dispatch(getUsers({ nombre: value }))
    }

    const handleClick = (id) => {
        dispatch({ type: "SET_USER", payload: id })
        openModal()
    }
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#000000',
            padding: '0px 40px 20px 40px',
            color: '#ffffff'
        },
    };

    return (
        <div className={style.ctnTabla}>
            <input type="text" value={input} onChange={(e) => handleChange(e)} />
            <div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th className={style.table1}  >Nombre</th>
                            <th className={style.table1} >Email</th>
                            <th className={style.table1} >Estado</th>
                            <th className={style.table1} >Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(x => (
                                <tr>
                                    <td className={style.table2} >{x.nombre}</td>
                                    <td className={style.table2} >{x.email}</td>
                                    <td className={style.table2} >{x.admin ? "Admin" : "User"}</td>
                                    <td ><button className={style.btn} onClick={() => handleClick(x._id)}>{x.admin? "Quitar Admin" : "Hacer Admin"}</button> </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button className={style.btnx} onClick={closeModal}> x</button>
                    <h2 className={style.title}>El usuario esta a punto de convertirse en: {user?.admin ? "User" : "Admin"}</h2>
                    <UserDetail closeModal={closeModal}/>
                </Modal>

            </div>
        </div>
    )
}

export default UsersList;