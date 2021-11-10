import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import style from './Styles/Dates.module.css'
import { BsPencilSquare } from "react-icons/bs";
import Modal from 'react-modal';
import { editDateProfile } from '../../redux/actions/actions'

function Dates() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        documento: ''
    });

    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnSumit = e => {
        e.preventDefault();
        dispatch(editDateProfile(values));
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#000000',
            color: 'rgb(255, 255, 255)',
        },
    };

    return (
        <div>
            <div className={style.ctn} >

                <div className={style.data}>
                    <h3 className={style.titlePrin}>Mis datos <BsPencilSquare onClick={openModal} className={style.icon} /></h3>

                </div>
                <div className={style.data}>
                    <img className={style.img} src={user?.imagen ? user?.imagen : user?.imagen?.imagen} />
                </div>

                <div className={style.data}>
                    <p className={style.title1} >Nombre:</p>
                    <p className={style.user}>{user?.nombre ? user?.nombre : user?.user?.nombre} </p>
                </div>
                <div className={style.data}>
                    <p className={style.title1} >Apellido:</p>
                    <p className={style.user}>{user?.apellido ? user?.apellido : user?.user?.apellido} </p>
                </div>
                <div className={style.data}>
                    <p className={style.title1} >Email:</p>
                    <p className={style.user}>{user?.email ? user?.email : user?.user?.email}</p>
                </div>
                <div className={style.data}>
                    <p className={style.title1} >Documento:</p>
                    <p className={style.user}>{user?.docuemento ? user?.docuemento : user?.user?.docuemento} </p>
                </div>
                <div className={style.data}>
                    <p className={style.title1} >Telefono:</p>
                    <p className={style.user}>{user?.telefono ? user?.telefono : user?.user?.telefono} </p>
                </div>
                <div className={style.data}>
                    <p className={style.title1} >Fecha de nacimiento:</p>
                    <p className={style.user}> </p>
                </div>

            </div>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <form className={style.form} >
                    <p className={style.titleEditar}><b>Editar Datos</b></p>
                    <div className={style.username}>
                        <label className={style.title}>Nombre</label>
                        <input className={style.input}
                            name='nombre'
                            type="text"
                            placeholder='Su nombre...'
                            value={values.nombre}
                            onChange={handleOnChange}
                        />
                        {/* <p className={style.error}>{errors.nombre}</p> */}
                    </div>


                    <div className={style.apellido}>
                        <label className={style.title}>Apellido</label>
                        <input className={style.input}
                            name='apellido'
                            type="text"
                            placeholder='Su apellido...'
                            value={values.apellido}
                            onChange={handleOnChange}
                        />
                        {/* <p className={style.error}>{errors.apellido}</p> */}
                    </div>


                    <div className={style.telefono}>
                        <label className={style.title}>Telefono</label>
                        <input className={style.input}
                            name='telefono'
                            type="text"
                            placeholder='Su telefono...'
                            value={values.telefono}
                            onChange={handleOnChange}
                        />
                        {/* <p className={style.error}>{errors.email}</p> */}
                    </div>

                    <div className={style.documento}>
                        <label className={style.title}>Documento</label>
                        <input className={style.input}
                            name='documento'
                            type='text'
                            placeholder='Su docuemento...'
                            onChange={handleOnChange}
                            value={values.documento}
                        />
                        {/* <p className={style.error}>{errors.contraseña}</p> */}
                    </div>
                    <div className={style.ctnBtns}>
                        <button className={style.btn} onClick={handleOnSumit}>Aceptar</button>
                        <button className={style.btn} onClick={closeModal}> Cancelar </button>
                    </div>

                </form>
            </Modal>
        </div>

    )
}

export default Dates;