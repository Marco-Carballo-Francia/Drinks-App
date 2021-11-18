import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './Create.module.css';
import { createItem } from '../../../../redux/actions/actions.js';

const Create = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: "",
        descripcion: "",
        precio: "",
        imagen: "",
        categoria:[],
    })
    const [errors, setErrors] = useState({});

    const {categories} = useSelector(state => state.products)

    const validateNum = (e) => {
        let {name, value} = e.target;
        setInput({
            ...input,
            [name] : value
        })
        if(! /^[0-9]+$/.test(value)){
            setErrors({
                ...errors,
                [name] : "Solo numeros"
            })
        } else {
            setErrors({
                ...errors,
                [name] : ""
            })
        }
    }

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
   

    const handleSelect = (e) =>{
        if (!input.categoria.includes(e.target.value))
        setInput({
            ...input,
            categoria: [...input.categoria, e.target.value]
        })
    }



    const hadleClick = () => {
        dispatch(createItem(input))
    }

    return (
        <div className={style.Register}>
            <form className={style.form}>
                <div className={style.nombre}>
                    <label className={style.title}>Nombre</label>
                    <input className={style.input}
                        name="nombre"
                        type="text"
                        placeholder="Nombre del producto..."
                        value={input.nombre}
                        onChange={handleOnChange}
                    />
                </div>

                <div className={style.descripcion}>
                    <label className={style.title}>Descripcion</label>
                    <input className={style.input}
                        name="descripcion"
                        type="text"
                        placeholder="Descripcion del producto..."
                        value={input.descripcion}
                        onChange={handleOnChange}
                    />
                </div>

                <div className={style.precio}>
                    <label className={style.title}>Precio</label>
                    <input className={style.inputPrecio}
                        name="precio"
                        type="text"
                        placeholder="Precio del producto..."
                        value={input.precio}
                        onChange={e => validateNum(e)}
                    />
                    <p className={style.error}>{errors.precio}</p>
                </div>

                <div className={style.imagen}>
                    <label className={style.title}>Imagen</label>
                    <input className={style.input}
                        name="imagen"
                        type="text"
                        placeholder="Imagen del producto..."
                        value={input.imagen}
                        onChange={handleOnChange}
                    />
                </div>

                <div className={style.category}>
                    <label className={style.title}>Categoria</label>
                    <select onChange={handleSelect}>
                            <option value="categorias">Categorias</option>
                            {
                                categories?.map((e) => {
                                    return <option>{e.nombre}</option>
                                })
                            }
                        </select>
                        <div>
                            {input.categoria?.map(e =>
                                <div>{e}</div>
                            )}
                        </div>
                 {/*    <input className={style.input}
                        name="categoria"
                        type="text"
                        placeholder="Categoria del producto..."
                        value={input.categoria}
                        onChange={handleOnChange} */}
                    
                </div>
                <button className={style.btn} onClick={hadleClick}>Crear</button>
            </form>
        </div>

    )
}

export default Create;