import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {datosCompra} from "../..redux/actions/actions";


const validateInput = (input) => {
    let errors = {}
    if(!input.name){
        errors.name = ("Se requiere un Nombre");
    }
    if(!input.apellido){
        errors.apellido = ("Se requiere un Apellido");
    }
    if(!input.direccionDeEnvio){
        errors.direccionDeEnvio = ("Se requiere una direccion de envio");
    }
    if(!input.codigoPostal){
        errors.codigoPostal = ("Se requiere un codigo postal");
    }
    if(!input.telefono){
        errors.telefono = ("Se requiere un telefono");
    }

}

const DatosCompra = () => {
   const dispatch = useDispatch();
   const [errors, setErrors] = useState({})
   const [input, setInput] = useState({
       name: "",
       apellido: "",
       direccionDeEnvio: "",
       codigoPostal: "",
       telefono: "",
   })

   const handleInputChange = (e) => {
       setInput({
           ...input,
           [e.target.name]: e.target.value
       })
       setErrors(validateInput({
           ...errors,
           [e.target.name]: e.target.value
       }))
   }

   const handleSubmit = () => {

   }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Llena tus Datos!</h1>
            <div>
                <input type="text" value={input.name} placeholder="Ingrese su Nombre" name="name" onChange={handleInputChange}/>
                {errors.name && (<p>{errors.name}</p>)}
            </div>
            <div>
                <input type="text" value={input.apellido} placeholder="Ingrese Su Apellido" name="apellido" onChange={handleInputChange}/>
                {errors.apellido && (<p>{errors.apellido}</p>)}
            </div>
            <div>
                <input type="text" value={input.direccionDeEnvio} placeholder="Ingrese su Direccion" name="direccionDeEnvio" onChange={handleInputChange}/>
                {errors.direccionDeEnvio && (<p>{errors.direccionDeEnvio}</p>)}
            </div>
            <div>
                <input type="number" value={input.codigoPostal} placeholder="Ingrese su Codigo Postal" name="codigoPostal" onChange={handleInputChange}/>
                {errors.codigoPostal && (<p>{errors.codigoPostal}</p>)}
            </div>
            <div>
                <input type="number" value={input.telefono} placeholder="Ingrese su numero de telefono" name="telefono" onChange={handleInputChange}/>
                {errors.telefono && (<p>{errors.telefono}</p>)}
            </div>
            <div>
                <button type="submit">Enviar</button> 
            </div>


        </form>
    )
}


export default DatosCompra;