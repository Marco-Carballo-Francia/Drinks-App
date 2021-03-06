import React, { useState } from "react";
import style from './Register.module.css';
import { useDispatch } from 'react-redux';
import { registerLocal } from '../../redux/actions/actions';
import { Link, useHistory } from "react-router-dom";
import Modal from 'react-modal';
import { BsCheck2Square } from "react-icons/bs";

const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        contraseña: '',
        validarContraseña: ""
    });

    const validateLetters = (e) => {
        let { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        if (!/^[A-Z]+$/i.test(value)) {
            setErrors({
                ...errors,
                [name]: "Solo letras"
            })
        } else {
            setErrors({
                ...errors,
                [name]: ""
            })
        }
    }
    //--------------------------------------------------------
    const validateEmail = (e) => {
        let { name, value } = e.target;
        let expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        setValues({
            ...values,
            [name]: value
        })
        if (!expresion.test(value)) {
            setErrors({
                ...errors,
                [name]: "No es un email valido!"
            })
        } else {
            setErrors({
                ...errors,
                [name]: ""
            })
        }
    }

    //--------------------------------------    
    const validatePassword = (e) => {
        let { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        if (!/^.{4,12}$/.test(value)) {
            setErrors({
                ...errors,
                [name]: "Debe contener entre 4 y 12 caracteres"
            })
        } else {
            setErrors({
                ...errors,
                [name]: ""
            })
        }
    }

    const validatePassword2 = (e) => {
        let { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (value !== values.contraseña) {
            setErrors({
                ...errors,
                [name]: "No coincide"
            })
        } else {
            setErrors({
                ...errors,
                [name]: "",
            })
        }
    }


    function openModal() {
        setIsOpen(false);
    }

    const handleOnChange = e => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value,

        })

    }

    const handleOnSumit = e => {
        e.preventDefault();
        if (
            !errors.nombre &&
            !errors.apellido &&
            !errors.email &&
            !errors.contraseña
        ) {
            dispatch(registerLocal(values));
            setIsOpen(true)

        } else {
            alert("The form is required");
        }
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#ffffff',
            padding: '30px',
        },
    };


    const handleOnClick = () => history.push('/');

    return (
        <div className={style.Register}>
            <form className={style.form} onSubmit={handleOnSumit} >
                <p className={style.titleRegister}>REGISTRARSE</p>

                <div className={style.ctn}>
                    <div className={style.username}>

                        <label className={style.title}>Nombre</label>
                        <input className={style.input}
                            name='nombre'
                            type="text"
                            placeholder='Su nombre...'
                            value={values.nombre}
                            onChange={e => {
                                handleOnChange(e)
                                validateLetters(e)
                            }}
                            required
                        />
                        <p className={style.error}>{errors.nombre}</p>
                    </div>


                    <div className={style.email}>
                        <label className={style.title}>Apellido</label>
                        <input className={style.input}
                            name='apellido'
                            type="text"
                            placeholder='Su apellido...'
                            value={values.apellido}
                            onChange={e => {
                                handleOnChange(e)
                                validateLetters(e)
                            }}
                            required
                        />
                        <p className={style.error}>{errors.apellido}</p>
                    </div>
                </div>

                <div className={style.ctn}>

                    <div className={style.email}>
                        <label className={style.title}>Email</label>
                        <input className={style.input}
                            name='email'
                            type="text"
                            placeholder='Su email...'
                            value={values.email}
                            onChange={e => {
                                handleOnChange(e)
                                validateEmail(e)
                            }}
                            required
                        />
                        <p className={style.error}>{errors.email}</p>
                    </div>

                    <div className={style.password}>
                        <label className={style.title}>Contraseña</label>
                        <input className={style.input}
                            name='contraseña'
                            type='password'
                            placeholder='Su contraseña...'
                            onChange={e => {
                                handleOnChange(e)
                                validatePassword(e)
                            }}
                            value={values.contraseña}
                            required
                        />
                        <p className={style.error}>{errors.contraseña}</p>
                    </div>
                </div>

                <div className={style.validatePassword}>
                    <label className={style.title}>Validar Contraseña</label>
                    <input className={style.input}
                        name='validarContraseña'
                        type='password'
                        placeholder='Su contraseña...'
                        onChange={e => {
                            handleOnChange(e)
                            validatePassword2(e)
                        }}
                        value={values.validarContraseña}
                        required
                    />
                    <p className={style.error}>{errors.validarContraseña}</p>
                </div>

                <div>
                    <div>
                        <button className={style.btn} onClick={openModal}>REGISTRARSE</button>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div className={style.ctnText} >
                            <h2 className={style.titleModal} > Felicitaciones! <BsCheck2Square className={style.icon} /> </h2>
                            <p className={style.texto}> Su registro fue realizado correctamente</p>
                            <button className={style.btnAceptar} onClick={handleOnClick} >Aceptar</button>
                        </div>
                    </Modal>
                </div>
                <div className={style.link}>
                    Ya tenes cuenta?  <Link to="/login">Ingresá</Link>
                </div>

            </form>
        </div>
    );
};

export default Register;