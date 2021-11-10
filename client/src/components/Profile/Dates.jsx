import React, { useState } from 'react';
import { useSelector } from "react-redux";
import style from './Styles/Dates.module.css'

function Dates() {
    const { user } = useSelector((state) => state.user);
    const [state, setState] = useState(false)
    const [errors, setErrors] = useState({});

    const [values, setValues] = useState({
        nombre: '',
        apellido: ''
    });

    let validateLetras = /^[A-Z]+$/i
    const validate = () => {
        let errors = {};
        if (!validateLetras.test(values.nombre)) {
            errors.nombre = "debe ser solo letras";
        }
        if (!validateLetras.test(values.apellido)) {
            errors.apellido = "debe ser solo letras";
        }
        return errors;
    };

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

    // const handleOnSumit = e => {
    //     e.preventDefault();
    //     if (
    //         !errors.nombre &&
    //         !errors.apellido &&
    //     ) {
    //         // dispatch(registerLocal(values));

    //     } else {
    //         alert("The form is required");
    //     }
    // }


    return (
        <div>
            {
                state === false ? (
                    <div className={style.ctn} >
                        <div className={style.data}>
                            <p className={style.title} >Nombre:</p>
                            <p className={style.user}>{user.nombre ? user.nombre : user.user.nombre} </p>
                        </div>
                        <div className={style.data}>
                            <p className={style.title} >Apellido:</p>
                            <p className={style.user}>{user.apellido ? user.apellido : user.user.apellido} </p>
                        </div>
                        <div className={style.data}>
                            <p className={style.title} >Email:</p>
                            <p className={style.user}>{user.email ? user.email : user.user.email}</p>
                        </div>
                        <div className={style.data}>
                            <p className={style.title} >Documento:</p>
                            <p className={style.user}></p>
                        </div>
                        <div className={style.data}>
                            <p className={style.title} >Telefono:</p>
                            <p className={style.user}></p>
                        </div>
                    </div>
                ) :
                    <div className={style.Register}>
                        <form className={style.form}  >
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
                        </form>
                    </div>


            }

        </div>

    )
}

export default Dates;