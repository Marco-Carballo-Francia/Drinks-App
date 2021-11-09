import React, {useState} from "react";
import { useDispatch } from "react-redux";
import style from './Forgot.module.css';

const Forgot = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        email: ""
    })
    const [errors, setErrors] = useState({});

    let validationEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const validation = () =>{
        let errors = {};
        if (!validationEmail.test(input.email)) {
            errors.email = "Email requerido";
        }
        return errors
     }
     
     const handleInputChange =  (e) =>{
         setInput({
             ...input,
             [e.target.name] : e.target.value
             
         })
         console.log(input) 
         setErrors(
             validation({
                 ...input,
                 [e.target.name] : e.target.value
                 
             })
         )
     }



return(
    <div>

    <h4>Ingrese su Email para recuperar la contraseña</h4>
        
    <div>
        <input type="text" value={input.email} name="email" placeholder="Ingresa tu Email" onChange={handleInputChange}></input>
        <p className={style.error}>{errors.email && errors.email}</p>        
        
    
    </div>


    <button>Enviar</button>

    </div>
)
}

export default Forgot;