import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, getAdminItems, getCategories, updateItem } from "../../../../../redux/actions/actions";
import style from "./StockUpdate.module.css";

const StockUpdate = ({ closeModal }) => {
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const { item } = useSelector(state => state.admin);
    const { categories } = useSelector(state => state.products)

    const [object, setObject] = useState({
        nombre: "",
        precio: "",
        descripcion: "",
        imagen: "",
        stock: 0,
        categorias: [],
    })

    const handleDelete = () => {
        let answer = window.confirm(`Usted está por borrar el siguiente producto: ${item.nombre}`);
        if (answer) {
            dispatch(deleteItem(item._id))
            closeModal();
        }
        else {
            console.log("shkere");
            
        }
        getAdminItems({});
    }

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setObject({
            ...object,
            [name]: value
        })
    }

    const handleSelect = (e) => {
        if (!object.categorias.includes(e.target.value)) {
            setObject({
                ...object,
                categorias: [...object.categorias, e.target.value]
            })
        }
    }



    const handleEdit = () => {
        dispatch(getCategories())
        setObject({
            nombre: item.nombre,
            precio: item.precio,
            descripcion: item.descripcion,
            imagen: item.imagen,
            stock: item.stock,
            categorias: item.categorias.map(el => el.nombre),
        })
        setEdit(true);
    }

    const handleSave = () => {
        dispatch(updateItem({id: item._id, object}));
        setObject({
            nombre: "",
            precio: "",
            descripcion: "",
            imagen: "",
            stock: 0,
            categorias: [],
        });
        closeModal();
        getAdminItems({});
    }

    const handleX = () => {
        closeModal();
    }

    return (
        <div className={style.container}>
            <button onClick={handleX}>X</button>
            {
                !edit
                    ? <div>
                        <p>Nombre: {item.nombre}</p>
                        <p>Precio:{item.precio}</p>
                        <p>Descripcion: {item.descripcion}</p>
                        <p>Imagen: {item.imagen}</p>
                        <div>
                            {item.categorias?.map(e =>
                                <div>{e.nombre}</div>
                            )}
                        </div>
                    </div>
                    : <div>
                        <input className={style.input} type="text" name="nombre" value={object.nombre} placeholder="Nombre..." onChange={handleChange} />
                        <input className={style.input} name="precio" value={object.precio} placeholder="Precio..." onChange={handleChange} />
                        <textarea className={style.textarea} name="descripcion" value={object.descripcion} placeholder="Descripcion..." onChange={handleChange} />
                        <input className={style.input} name="imagen" value={object.imagen} placeholder="Imagen..." onChange={handleChange} />
                        <input className={style.input} type="number" min="0" name="stock" value={object.stock} placeholder="Stock..." onChange={handleChange} />
                        <select onChange={handleSelect}>
                            <option value="categorias">Categorias</option>
                            {
                                categories.map((e) => {
                                    return <option>{e.nombre}</option>
                                })
                            }
                        </select>
                        <div>
                            {object.categorias?.map(e =>
                                <div>{e}</div>
                            )}
                        </div>

                    </div>
            }
            <div className={style.ctnBtnsModal}>
                {
                    !edit
                        ? <button className={style.btnModal} onClick={handleDelete}>ELIMINAR</button>
                        : <button className={style.btnModal} onClick={handleSave}>GUARDAR</button>
                }
                {
                    !edit
                        ? <button className={style.btnModal} disabled={!item} onClick={handleEdit}>EDITAR</button>
                        : <button className={style.btnModal} onClick={() => setEdit(false)}>CANCELAR</button>
                }
            </div>
        </div>
    )
}

export default StockUpdate;