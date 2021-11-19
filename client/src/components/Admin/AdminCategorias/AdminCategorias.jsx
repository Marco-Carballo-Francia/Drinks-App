import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, createCategory, updateCategory } from "../../../redux/actions/actions";
import styles from "./AdminCategorias.module.css";

const AdminCategorias = () => {
    // const [inputE, setInputE] = useState('');
    const [inputC, setInputC] = useState('');
    // const [id, setId] = useState("");
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.products)
    const mappedCategories = categories.map(e => e.nombre)

    const [error, setError] = useState("")
    
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    // const handleEdit = (e) => {
    //     console.log('e.target.value', e.target.value)
    //     setInputE(e.target.value);  
    // } 
    
    const handleCreate = (e) => {
        if(mappedCategories.includes(e.target.value)) {
            setError("Esa categoría ya existe.")
        }
        else {
            setError("");
            setInputC(e.target.value);  
        }
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCategory(inputC))
        setInputC('');
    }
    
    // const handleSelect = (e) => {
    //     console.log('e.target.value', e.target.value)
    //     console.log('e.target.label', e.target.label)
    //     setId(e.target.value)
    //     setInputE(e.target.label)
    // }

    // const handleGuardar = () => {
    //     dispatch(updateCategory({ id, nombre: inputE }));
    //     alert("Guardado!") // <--- modal
    // }
    

    return (
        <div>
            {/* <h5>Categorías existentes:</h5> */}
            {/* <div className={styles.categorias}>        
                <select onChange={handleSelect}>
                    <option selected value="">seleccione categoría</option>
                    {
                        categories?.map(x => {
                        return (
                            <option label={x.nombre} value={x._id} >{x.nombre}</option>
                            )
                        })
                    }
                </select>
                <input type="text" value={inputE} onChange={handleEdit}/>
                <button disabled={!inputE} onClick={handleGuardar}>GUARDAR</button>
            </div> */}
            <h5>Nueva Categoría:</h5>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputC} name='nombre' onChange={handleCreate}/>
                { error ? error : null }
                <button disabled={!inputC || error} type="submit">CREAR CATEGORÍA</button>
            </form>
        </div>
    )
}

export default AdminCategorias;