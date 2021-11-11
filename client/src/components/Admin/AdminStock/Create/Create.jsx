import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from './DatosCompra.module.css';


const Create = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        descripcion: "",
        precio: "",
        imagen: "",
        categoria: "",
    })
    const [errors, setErrors] = useState({});


    let validateNumbers = /^[0-9]+$/;

    const validateNum = () => {
        let errors = {}
        if (!validateNumbers.test(input.precio)) {
            errors.precio = "debe ser solo numeros";
        }
    }

    const handleOnChange = () => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(
            validateNum({
                ...input,
                [e.target.name]: e.target.value
            })

        )
    }


    const hadleClick = () => {
        dispatch(createItem(input))
    }

    return (
    <div className={style.Register}>
        <form className={style.form}>
            <div className={style.nombre}>
            <label>Nombre</label>
            <input className={style.input}
                name="nombre"
                type="text"
                placeholder="Nombre del producto..."
                value={input.nombre}
                onChange={handleOnChange}
            />
            </div>
            <div className={style.descripcion}>
            <label>Descripcion</label>
            <input className={style.input}
                name="descripcion"
                type="text"
                placeholder="Descripcion del producto..."
                value={input.descripcion}
                onChange={handleOnChange}
            />
            </div>
            <div className={style.precio}>
            <label>Precio</label>
            <input className={style.input}
                name="precio"
                type="text"
                placeholder="Precio del producto..."
                value={input.precio}
                onChange={handleOnChange}
            />
            <p className={style.error}>{errors.precio}</p>
            </div>
            <div className={style.img}>
            <label>Imagen</label>
            <input className={style.input}
                name="imagen"
                type="text"
                placeholder="Imagen del producto..."
                value={input.imagen}
                onChange={handleOnChange}
            />
            </div>
            <div className={style.category}>
            <label>Categoria</label>
            <input className={style.input}
                name="categoria"
                type="text"
                placeholder="Categoria del producto..."
                value={input.categoria}
                onChange={handleOnChange}
            />
            </div>
             <button onClick={hadleClick}>Crear</button>
        </form>
    </div>

    )
}

export default Create;