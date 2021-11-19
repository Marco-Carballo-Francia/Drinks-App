import React, {useState} from "react";
//import { useDispatch } from "react-redux";
import style from './NewPassword.module.css';

const NewPassword = () => {
    const [input, setInput] = useState({
        password: ""
    })

    const [errors, setErrors] = useState({})

    const validatePassword = () => {
        let errors = {};
        if (!validatePassword.test(input.password)) {
            errors.password = "Desde 4 a 14 digitos";
        }
        return errors;
    }
    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(
            validatePassword({
            ...input,
            [e.target.name] : e.target.value
            })
        )
        
    }

    

    return ( 
        <div>
            <h4>Ingrese su nueva contraseña</h4>
            <input type="password" value={input.password} name="email" placeholder="Contraseña..." onChange={handleInputChange}></input>
            <p className={style.errors}>{errors.password && errors.password}</p>
        </div>
    )
}

export default NewPassword;