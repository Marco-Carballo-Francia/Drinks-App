import React, { useState } from "react";
import style from './Register.module.css';
import { useDispatch } from 'react-redux';
import { registerLocal } from '../../redux/actions/actions';
import { Link, useHistory } from "react-router-dom";
import Modal from 'react-modal';

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
        validarContraseña : ""
    });

    let validateLetras = /^[A-Z]+$/i
    let validateEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let validateContraseña = /^.{4,12}$/
    const validate = () => {
        let errors = {};
        if (!validateLetras.test(values.nombre)) {
            errors.nombre = "debe ser solo letras";
        }
        if (!validateLetras.test(values.apellido)) {
            errors.apellido = "debe ser solo letras";
        }
        if (!validateEmail.test(values.email)) {
            errors.email = "Email requerido";
        }
        if (!validateContraseña.test(values.contraseña)) {
            errors.contraseña = "Desde 4 a 14 digitos";
        }
        if(values.validarContraseña !== values.contraseña){
            errors.validarContraseña = "Error"
        }
        return errors;
    };

    function openModal() {
        setIsOpen(false);
    }

    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
            
        })
        console.log(values)
        setErrors(
            validate({
                ...values,
                [e.target.name]: e.target.value,
            })
            );
            console.log(values)
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
            backgroundColor: '#000000',
            color: 'rgb(255, 255, 255)',
        },
    };


    const handleOnClick = () => history.push('/');

    return (
        <div className={style.Register}>
            <form className={style.form} onSubmit={handleOnSumit} >
                <p className={style.titleRegister}><b>REGISTRARSE</b></p>
                <div className={style.username}>
                    <label className={style.title}>Nombre</label>
                    <input className={style.input}
                        name='nombre'
                        type="text"
                        placeholder='Su nombre...'
                        value={values.nombre}
                        onChange={handleOnChange}
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
                        onChange={handleOnChange}
                    />
                    <p className={style.error}>{errors.apellido}</p>
                </div>


                <div className={style.email}>
                    <label className={style.title}>Email</label>
                    <input className={style.input}
                        name='email'
                        type="text"
                        placeholder='Su email...'
                        value={values.email}
                        onChange={handleOnChange}
                    />
                    <p className={style.error}>{errors.email}</p>
                </div>

                <div className={style.password}>
                    <label className={style.title}>Contraseña</label>
                    <input className={style.input}
                        name='contraseña'
                        type='password'
                        placeholder='Su contraseña...'
                        onChange={handleOnChange}
                        value={values.contraseña}
                    />
                    <p className={style.error}>{errors.contraseña}</p>
                </div>

                <div className={style.validatePassword}>
                    <label className={style.title}>Validar Contraseña</label>
                    <input className={style.input}
                        name='validarContraseña'
                        type='password'
                        placeholder='Su contraseña...'
                        onChange={handleOnChange}
                        value={values.validarContraseña}
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
                            <h2 className={style.titleModal} >El usuario se ha registrado correctamente</h2>
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