import React, { useState } from "react";
import { useDispatch } from "react-redux";


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
        <form>
            <label>Nombre</label>
            <input
                name="nombre"
                type="text"
                placeholder="Nombre del producto..."
                value={input.nombre}
                onChange={handleOnChange}
            />

            <label>Descripcion</label>
            <input
                name="descripcion"
                type="text"
                placeholder="Descripcion del producto..."
                value={input.descripcion}
                onChange={handleOnChange}
            />
            <label>Precio</label>
            <input
                name="precio"
                type="text"
                placeholder="Precio del producto..."
                value={input.precio}
                onChange={handleOnChange}
            />
            <p>{errors.precio}</p>
            <label>Imagen</label>
            <input
                name="imagen"
                type="text"
                placeholder="Imagen del producto..."
                value={input.imagen}
                onChange={handleOnChange}
            />
            <label>Categoria</label>
            <input
                name="categoria"
                type="text"
                placeholder="Categoria del producto..."
                value={input.categoria}
                onChange={handleOnChange}
            />
             <button onClick={hadleClick}>Crear</button>
        </form>

    )
}

export default Create;