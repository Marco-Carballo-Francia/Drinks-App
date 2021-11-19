
// import React, { useState } from "react";
// import style from './DatosCompra.module.css';
// import { useDispatch, useSelector } from "react-redux";
// import {datosDeCompra} from "../../redux/actions/actions.js";
// import { Link } from "react-router-dom";

/* import React, { useState } from "react";
import style from './DatosCompra.module.css';
import { useDispatch, useSelector } from "react-redux";
import {datosDeCompra} from "../../redux/actions/actions.js";
import { Link } from "react-router-dom";
import Modal from 'react-modal';



// const DatosCompra = () => {
//    const dispatch = useDispatch();
//    const [errors, setErrors] = useState({})
//    const [modalIsOpen, setIsOpen] = useState(false);
//    const [input, setInput] = useState({
//        nombre: "",
//        apellido: "",
//        direccion: "",
//        codigoPostal: "",
//        telefono: "",
//        telefono2: "" 
//    }) 
// 
//    const [errorName, setErrorName] = useState("");
// 	function validateName(value) {
// 		setInput({
// 			...input,
// 			nombre: value,
// 		})
// 		if(!/^[a-zA-Z\s]*$/.test(value)) {
// 			setErrorName("Solo Letras!");
// 		}
// 		else {  
// 			setErrorName("");
// 		}
// 	}
// 
//     const [errorApellido, setErrorApellido] = useState("");
// 	function validateApellido(value) {
// 		setInput({
// 			...input,
// 			apellido: value,
// 		})
// 		if(!/^[a-zA-Z\s]*$/.test(value)) {
// 			setErrorApellido("Solo Letras!");
// 		}
// 		else {
// 			setErrorApellido("");
// 		}
// 	}
// //-------------------------------------.-----------------------------
//     const [errorCalle, setErrorCalle] = useState("");
// 	function validateCalle(value) {
// 		setInput({
// 			...input,
// 			direccion: value,
// 		})
// 		if(!/^[a-zA-Z\s]*$/.test(value)) {
// 			setErrorCalle("solo letras");
// 		}
// 		else {
// 			setErrorCalle("");
// 		}
// 	}
// //-------------------------------------.-----------------------------
// const [errorAltura, setErrorAltura] = useState("");
// function validateAltura(value) {
//     setInput({
//         ...input,
//         altura: value,
//     })
//     if(!/^[0-9]+$/.test(value)) {
//         setErrorAltura("Error");
//     }
//     else {
//         setErrorAltura("");
//     }
// }
// //-------------------------------------.-----------------------------
// const [errorCodigoPostal, setErrorCodigoPostal] = useState("");
// function validateCodigoPostal(value) {
//     setInput({
//         ...input,
//         codigoPostal: value,
//     })
//     if(!/^[0-9]+$/.test(value)) { 
//         setErrorCodigoPostal("Error");
//     }
//     else {
//         setErrorCodigoPostal("");
//     }
// }

// //-------------------------------------.-----------------------------
// const [errorTelefono, setErrorTelefono] = useState("");
// function validateTelefono(value) {
//     setInput({
//         ...input,
//         telefono: value,
//     })
//     if(!/^[0-9]+$/.test(value)) { 
//         setErrorTelefono("Error");
//     }
//     else {
//         setErrorTelefono("");
//     }
// }
// const [errorTelefono2, setErrorTelefono2] = useState("");
// function validateTelefono2(value) {
//     setInput({
//         ...input,
//         telefono2: value,
//     })
// }

// //-------------------------------------.-----------------------------
//    const handleInputChange = (e) => {
//        e.preventDefault();
//        let { name, value } = e.target;
//        setInput({
//            ...input,
//            [name]: value
//        })
//    }

//    function openModal() {
//     setIsOpen(false);
// }
//    const handleSubmit = (e) => {
//      e.preventDefault();
//      dispatch(datosDeCompra(input))
//      setInput({
//         nombre: "",
//         apellido: "",
//         direccion: "",
//         codigoPostal: "",
//         telefono: "",
//      })
//      setIsOpen(true)
//    }


//     return(
//     <div className={style.Register}>
//         <form className={style.form} onSubmit={handleSubmit}>
//             <h1>Llena tus Datos!</h1>
//             <div className={style.nombre}>
//                 <input className={style.input}
//                   type="text"
//                   value={input.nombre} 
//                   placeholder="Su Nombre"
//                   name="nombre" 
//                   required={true}
//                  onChange={e => validateName(e.target.value)}/>
//                {!errorName ? null : (<p className={style.error}>{errorName}</p>)}
//             </div>
//             <div className={style.apellido}> 
//                 <input  className={style.input}
//                  type="text"
//                  value={input.apellido}
//                  placeholder="Su Apellido" 
//                  name="apellido" 
//                  required={true}
//                  onChange={e => validateApellido(e.target.value)}/>
//                 {!errorApellido ? null : (<p className={style.error}>{errorApellido}</p>)}
//             </div>
//             <div className={style.direccion}>
//                 <input  className={style.input}
//                 type="text" 
//                 value={input.direccion} 
//                 placeholder="Su calle" 
//                 name="calle" 
//                 required={true}
//                 onChange={e => validateCalle(e.target.value)}/>
//                 {!errorCalle ? null : (<p className={style.error}>{errorCalle}</p>)} 
//             <div className={style.codigo}>
//                 <input  className={style.input} 
//                 type="text" 
//                 value={input.codigoPostal} 
//                 placeholder="Su Codigo Postal" 
//                 name="codigoPostal" 
//                 maxLength="4"
//                 onChange={e => validateCodigoPostal(e.target.value)}/>
//                 {!errorCodigoPostal ? null : (<p className={style.error}>{errorCodigoPostal}</p>)} 
//             </div>
//             <div className={style.telefono}> 
//                 <input  className={style.input} 
//                 type="text" 
//                 value={input.telefono} 
//                 placeholder="Su numero de telefono"
//                 name="telefono" onChange={e => validateTelefono(e.target.value)}/>
//                {!errorTelefono ? null : (<p className={style.error}>{errorTelefono}</p>)} 
//             </div>
//             <div>
//                 <Link to="/home"/>
//             </div>
//         </form>
//     </div>
//     )
// }

// export default DatosCompra;

    return(
    <div className={style.Register}>
        <form className={style.form} onSubmit={handleSubmit}>
            <h1>Llena tus Datos!</h1>
            <div className={style.nombre}>
                <input className={style.input}
                  type="text"
                  value={input.nombre} 
                  placeholder="Su Nombre"
                  name="nombre" 
                  required={true}
                 onChange={e => validateName(e.target.value)}/>
               {!errorName ? null : (<p className={style.error}>{errorName}</p>)}
            </div>
            <div className={style.apellido}> 
                <input  className={style.input}
                 type="text"
                 value={input.apellido}
                 placeholder="Su Apellido" 
                 name="apellido" 
                 required={true}
                 onChange={e => validateApellido(e.target.value)}/>
                {!errorApellido ? null : (<p className={style.error}>{errorApellido}</p>)}
            </div>
            <div className={style.direccion}>
                <input  className={style.input}
                type="text" 
                value={input.direccion} 
                placeholder="Su calle" 
                name="calle" 
                required={true}
                onChange={e => validateCalle(e.target.value)}/>
                {!errorCalle ? null : (<p className={style.error}>{errorCalle}</p>)}
            </div> 
            <div className={style.codigo}>
                <input  className={style.input} 
                type="text" 
                value={input.codigoPostal} 
                placeholder="Su Codigo Postal" 
                name="codigoPostal" 
                maxLength="4"
                onChange={e => validateCodigoPostal(e.target.value)}/>
                {!errorCodigoPostal ? null : (<p className={style.error}>{errorCodigoPostal}</p>)} 
            </div>
            <div className={style.telefono}> 
                <input  className={style.input} 
                type="text" 
                value={input.telefono} 
                placeholder="Su numero de telefono"
                name="telefono" onChange={e => validateTelefono(e.target.value)}/>
               {!errorTelefono ? null : (<p className={style.error}>{errorTelefono}</p>)} 
            </div>
            <div>
                <Link to="/home"/>
            </div>
        </form>
    </div>
    )
}

export default DatosCompra; */

