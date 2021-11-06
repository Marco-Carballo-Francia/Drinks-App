import React, { useState } from "react";
import style from './Register.module.css';
import { useDispatch } from 'react-redux';
import { registerLocal } from '../../redux/actions/actions';
import { Link, useHistory } from "react-router-dom";
import Modal from 'react-modal';

const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    // const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        email: '',
        contraseña: ''
    });

    const [modalIsOpen, setIsOpen] = useState(false);

    // const validate = () => {
    //     let errors = {};
    //     if (!validateEmail.test(values.contraseña)) {
    //       errors.email = "email required";
    //     }
    //     if (!validatContraseña.test(values.contraseña)) {
    //       errors.contraseña = "contraseña required";
    //     }
    //     return errors;
    // };


    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        // setErrors(
        //   validate({
        //     ...values,
        //     [e.target.name]: e.target.values,
        //   })
        // );
    }

    const handleOnSumit = e => {

        // if (
        //     !errors.email &&
        //     !errors.contraseña

        // ) {
        e.preventDefault();
        dispatch(registerLocal(values));
        // history.push('/login');


        // } else {
        //     alert("The form is required");
        // }
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

    function openModal() {
        setIsOpen(true);
    }

    const handleOnClick = () => history.push('/login');

    return (
        <div className={style.Register}>
            <p className={style.titleRegister}><b>REGISTRARSE</b></p>
            <form className={style.form} onSubmit={handleOnSumit} >
                {/* <div className={style.username}>
                    <label className={style.title}>Nombre de usuario</label>
                    <input className={style.input}
                        type="text"
                        placeholder='Su nombre de usuario...'
                        // value={input.username}
                    />
                </div> */}

                <div className={style.email}>
                    <label className={style.title}>Email</label>
                    <input className={style.input}
                        name='email'
                        type="text"
                        placeholder='Su email...'
                        value={values.email}
                        onChange={handleOnChange}
                    />
                    {/* <p className={styles.error}>{errors.contraseña}</p> */}
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
                    {/* <p className={styles.error}>{errors.contraseña}</p> */}
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
                            <h2 className={style.titleModal} >El usuario se a registrado correctamente</h2>
                            <button className={style.btnAceptar} onClick={handleOnClick}>Aceptar</button>
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