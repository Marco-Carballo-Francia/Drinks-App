import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {datosDeCompra} from "../../redux/actions/actions.js";
import { Link } from "react-router-dom";
import Modal from 'react-modal';



const DatosCompra = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState({
        name: "",
        apellido: "",
        calle: "",
        altura: "",
        codigoPostal: "",
        telefono: "",
    })
    let validateLetras = /^[A-Z]+$/i
    

    const validateInput = (input) => {
        let errors = {}
        if(!validateLetras.test(input.name)){
            errors.name = ("Debe ser solo letras");
        }
        if(!validateLetras.test(input.apellido)){
            errors.apellido = ("Debe ser solo letras");
        }
        if(!validateLetras.test(input.calle)){
            errors.calle = ("Debe ser solo letras");
        }
        if(!input.altura){
            errors.altura = ("Se requiere la altura de la calle");
        }
        if(!input.codigoPostal){
            errors.codigoPostal = ("Se requiere un codigo postal");
        }
        if(!input.telefono){
            errors.telefono = ("Se requiere un telefono");
        }
        if(input.telefono < 0){
            errors.telefono = ("error")
        }
       return errors;
    }

   const handleInputChange = (e) => {
       setInput({
           ...input,
           [e.target.name]: e.target.value
       })
       console.log(input)
       setErrors(validateInput({
           ...input, 
           [e.target.name]: e.target.value 
       }))
   }

   function openModal() {
    setIsOpen(false);
}
   const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(datosDeCompra(input))
     setInput({
        name: "",
        apellido: "",
        calle: "",
        altura: "",
        codigoPostal: "",
        telefono: "",
     })
     setIsOpen(true)
   }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Llena tus Datos!</h1>
            <div>
                <input 
                 type="text"
                  value={input.name} 
                 placeholder="Su Nombre"
                    name="name" 
                 onChange={handleInputChange}/>
               {errors.name && (<p>{errors.name}</p>)}
            </div>
            <div>
                <input type="text"
                 value={input.apellido}
                 placeholder="Su Apellido" 
                 name="apellido" 
                 onChange={handleInputChange}/>
                {errors.apellido && (<p>{errors.apellido}</p>)}
            </div>
            <div>
                <span>Dirección:</span>
                <input type="text" 
                value={input.calle} 
                placeholder="Su calle" 
                name="calle" 
                onChange={handleInputChange}/>
                {errors.calle && (<p>{errors.calle}</p>)} 

                <input type="number" 
                value={input.altura} 
                placeholder="ingrese la altura de la calle"
                name="altura" 
                onChange={handleInputChange}/>
                {errors.altura && (<p>{errors.altura}</p>)}
            </div>
            <div>
                <input type="number" 
                value={input.codigoPostal} 
                placeholder="Su Codigo Postal" 
                name="codigoPostal" 
                onChange={handleInputChange}/>
                {errors.codigoPostal && (<p>{errors.codigoPostal}</p>)} 
            </div>
            <div> 
                <input type="number" 
                value={input.telefono} 
                placeholder="Su numero de telefono"
                name="telefono" onChange={handleInputChange}/>
               {errors.telefono && (<p>{errors.telefono}</p>)} 
            </div>
            <div>
                <button onClick={openModal}>Pagar</button> 
                <Link to="/home"/>
            </div>
        </form>
    )
}

export default DatosCompra;