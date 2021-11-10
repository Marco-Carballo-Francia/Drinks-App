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
        email: '',
        contraseña: ''
    });


    let validateEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let validateContraseña = /^.{4,12}$/
    const validate = () => {
        let errors = {};
        if (!validateEmail.test(values.email)) {
            errors.email = "Email requerido";
        }
        if (!validateContraseña.test(values.contraseña)) {
            errors.contraseña = "Desde 4 a 14 digitos";
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
        setErrors(
            validate({
                ...values,
                [e.target.name]: e.target.value,
            })
        );
    }

    const handleOnSumit = e => {
        e.preventDefault();
        if (
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


    const handleOnClick = () => history.push('/login');

    return (
        <div className={style.Register}>
            <form className={style.form} onSubmit={handleOnSumit} >
                <p className={style.titleRegister}><b>REGISTRARSE</b></p>
                <div className={style.username}>
                    <label className={style.title}>Nombre de usuario</label>
                    <input className={style.input}
                        type="text"
                        placeholder='Su nombre de usuario...'
                    // value={input.username}
                    />
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