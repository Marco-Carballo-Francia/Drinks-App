import React from 'react';
import style from './SearchBar.module.css';
import { useDispatch } from 'react-redux';
import {useState} from 'react'
import { getProducts, setPage } from '../../redux/actions/actions';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    function handleInputChange(e){
        e.preventDefault()
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(setPage(1))
        dispatch(getProducts({name:input}))
        setInput("")
    }

    
    return (
        <form onSubmit={e => handleSubmit(e)}className={style.SearchBar}>
            <input  value = {input} className={style.input} 
                    placeholder="Buscar por nombre y marca" 
                    onChange={e => handleInputChange(e)}/>
            <button className={style.btn} >Buscar</button>
        </form>
    );
};

export default SearchBar;