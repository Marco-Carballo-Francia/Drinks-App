import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import style from './Styles/Dates.module.css'
import { BsPencilSquare } from "react-icons/bs";
import Modal from 'react-modal';
import { editDateProfile } from '../../redux/actions/actions';
import Alert from 'react-bootstrap/Alert'

function Dates() {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.user);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);


    const id = user?._id ? user?._id : user?.user?._id;

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
        documento: '',
        fechadenacimiento: '',
        direccion: '',
        piso: '',
        departamento: '',
        codigoPostal: '',
        estadoProvincia: '',
        ciudad: ''
    });

    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnSumit = e => {
        e.preventDefault()
        let obj = {}
        if (values.nombre.length > 0) {
            obj.nombre = values.nombre
        }
        if (values.apellido.length > 0) {
            obj.apellido = values.apellido
        }
        if (values.telefono.length > 0) {
            obj.telefono = values.telefono
        }
        if (values.documento.length > 0) {
            obj.documento = values.documento
        }
        if (values.fechadenacimiento.length > 0) {
            obj.fechadenacimiento = values.fechadenacimiento
        }
        if (values.codigoPostal.length > 0) {
            obj.codigoPostal = values.codigoPostal
        }
        if (values.direccion.length > 0) {
            obj.direccion = values.direccion
        }
        if (values.piso.length > 0) {
            obj.piso = values.piso
        }
        if (values.departamento.length > 0) {
            obj.departamento = values.departamento
        }
        if (values.estadoProvincia.length > 0) {
            obj.estadoProvincia = values.estadoProvincia
        }
        if (values.ciudad.length > 0) {
            obj.ciudad = values.ciudad
        }

        dispatch(editDateProfile(id, obj));
        closeModal()
        setShow()
        setTimeout(() => {
            setShow(false)
        }, 2000);

        setValues({
            nombre: '',
            apellido: '',
            telefono: '',
            documento: '',
            fechadenacimiento: '',
            direccion: '',
            piso: '',
            departamento: '',
            codigoPostal: '',
            estadoProvincia: '',
            ciudad: ''
        });
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
            <div >
                <div className={style.data}>
                    <h3 className={style.titlePrin}>Mis datos <BsPencilSquare onClick={openModal} className={style.icon} /></h3>

                </div>

                <div className={style.data}>
                    <img className={style.img} src={user?.imagen ? user?.imagen : user?.imagen?.imagen} />
                </div>

                <div className={style.ctnDetail} >
                    <div className={style.ctnText}>
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
                            <p className={style.user}>{user?.documento ? user?.documento : user?.user?.documento} </p>
                        </div>

                        <div className={style.data}>
                            <p className={style.title1} >Telefono:</p>
                            <p className={style.user}>{user?.telefono ? user?.telefono : user?.user?.telefono} </p>
                        </div>

                        <div className={style.data}>
                            <p className={style.title1} >Fecha de nacimiento:</p>
                            <p className={style.user}>{user?.fechadenacimiento ? user?.fechadenacimiento : user?.user?.fechadenacimiento} </p>
                        </div>
                    </div>

                    <div className={style.ctnText}>
                        <div className={style.data}>
                            <p className={style.title1} >Direccion:</p>
                            <p className={style.user}>{user?.direccion ? user?.direccion : user?.user?.direccion} </p>
                        </div>

                        <div className={style.data}>
                            <p className={style.title1} >Piso:</p>
                            <p className={style.user}>{user?.piso ? user?.piso : user?.user?.piso} </p>
                        </div>

                        <div className={style.data}>
                            <p className={style.title1} >Departamento:</p>
                            <p className={style.user}>{user?.departamento ? user?.departamento : user?.user?.departamento} </p>
                        </div>

                        <div className={style.data}>
                            <p className={style.title1} >Estado/Provincia:</p>
                            <p className={style.user}>{user?.estadoProvincia ? user?.estadoProvincia : user?.user?.estadoProvincia} </p>
                        </div>
                        <div className={style.data}>
                            <p className={style.title1} >Ciudad:</p>
                            <p className={style.user}>{user?.ciudad ? user?.ciudad : user?.user?.ciudad} </p>
                        </div>

                        <div className={style.data}>
                            <p className={style.title1} >Codigo Postal:</p>
                            <p className={style.user}>{user?.codigoPostal ? user?.codigoPostal : user?.user?.codigoPostal} </p>
                        </div>
                    </div>
                </div>
                <Alert show={show} variant="success" className={style.alert}> Datos completos  </Alert>
            </div>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className={style.form} >
                    <p className={style.titleEditar}><b>Editar Datos</b></p>

                    <div className={style.ctnNameApe}>
                        <div className={style.username}>
                            <label className={style.title}>Nombre</label>
                            <input className={style.input}
                                name='nombre'
                                type="text"
                                placeholder={user?.nombre ? user?.nombre : user?.user?.nombre}
                                value={values.nombre}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className={style.apellido}>
                            <label className={style.title}>Apellido</label>
                            <input className={style.input}
                                name='apellido'
                                type="text"
                                placeholder={user?.apellido ? user?.apellido : user?.user?.apellido}
                                value={values.apellido}
                                onChange={handleOnChange}
                            />
                            {/* <p className={style.error}>{errors.apellido}</p> */}
                        </div>
                    </div>
                    <div className={style.ctnDocFecha}>
                        <div className={style.documento}>
                            <label className={style.title}>Documento</label>
                            <input className={style.input}
                                name='documento'
                                type='text'
                                placeholder={user?.documento ? user?.documento : user?.user?.documento}
                                onChange={handleOnChange}
                                value={values.documento}
                            />
                            {/* <p className={style.error}>{errors.contraseña}</p> */}
                        </div>

                        <div className={style.documento}>
                            <label className={style.title}>Fecha de nacimiento</label>
                            <input className={style.input}
                                name='fechadenacimiento'
                                type='text'
                                placeholder={user?.fechadenacimiento ? user?.fechadenacimiento : user?.user?.fechadenacimiento}
                                onChange={handleOnChange}
                                value={values.fechadenacimiento}
                            />
                            {/* <p className={style.error}>{errors.contraseña}</p> */}
                        </div>
                    </div>

                    <div className={style.ctnDirPisoDep}>
                        <div className={style.direccion}>
                            <label className={style.title}>Direccion</label>
                            <input className={style.inputDireccion}
                                name='direccion'
                                type='text'
                                placeholder={user?.direccion ? user?.direccion : user?.user?.direccion}
                                onChange={handleOnChange}
                                value={values.direccion}
                            />
                            {/* <p className={style.error}>{errors.contraseña}</p> */}
                        </div>



                        <div className={style.piso}>
                            <label className={style.title}>Piso</label>
                            <input className={style.inputPiso}
                                name='piso'
                                type='text'
                                placeholder={user?.piso ? user?.piso : user?.user?.piso}
                                onChange={handleOnChange}
                                value={values.piso}
                            />
                            {/* <p className={style.error}>{errors.contraseña}</p> */}
                        </div>

                        <div className={style.departamento}>
                            <label className={style.title}>Departamento</label>
                            <input className={style.inputDepartamento}
                                name='departamento'
                                type='text'
                                placeholder={user?.departamento ? user?.departamento : user?.user?.departamento}
                                onChange={handleOnChange}
                                value={values.departamento}
                            />
                            {/* <p className={style.error}>{errors.contraseña}</p> */}
                        </div>
                    </div>

                    <div className={style.ctnNameApe}>
                        <div className={style.documento}>
                            <label className={style.title}>Estado/Provincia</label>
                            <input className={style.input}
                                name='estadoProvincia'
                                type='text'
                                placeholder={user?.estadoProvincia ? user?.estadoProvincia : user?.user?.estadoProvincia}
                                onChange={handleOnChange}
                                value={values.estadoProvincia}
                            />
                            {/* <p className={style.error}>{errors.contraseña}</p> */}
                        </div>

                        <div className={style.documento}>
                            <label className={style.title}>Ciudad</label>
                            <input className={style.input}
                                name='ciudad'
                                type='text'
                                placeholder={user?.ciudad ? user?.ciudad : user?.user?.ciudad}
                                onChange={handleOnChange}
                                value={values.ciudad}
                            />
                            {/* <p className={style.error}>{errors.contraseña}</p> */}
                        </div>
                    </div>

                    <div className={style.ctnNameApe}>
                        <div className={style.documento}>
                            <label className={style.title}>Codigo Postal</label>
                            <input className={style.input}
                                name='codigoPostal'
                                type='text'
                                placeholder={user?.codigoPostal ? user?.codigoPostal : user?.user?.codigoPostal}
                                onChange={handleOnChange}
                                value={values.codigoPostal}
                            />
                            {/* <p className={style.error}>{errors.contraseña}</p> */}
                        </div>

                        <div className={style.telefono}>
                            <label className={style.title}>Telefono</label>
                            <input className={style.input}
                                name='telefono'
                                type="text"
                                placeholder={user?.telefono ? user?.telefono : user?.user?.telefono}
                                value={values.telefono}
                                onChange={handleOnChange}
                            />
                            {/* <p className={style.error}>{errors.email}</p> */}
                        </div>
                    </div>


                    <div className={style.ctnBtns}>
                        <button className={style.btn} onClick={handleOnSumit} >Aceptar</button>
                        <button className={style.btn} onClick={closeModal}> Cancelar </button>
                    </div>

                </form>
            </Modal>
        </div>
    )
}

export default Dates;