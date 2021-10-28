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
        <div className={style.SearchBar}>
            <input  value = {input} className={style.input} 
                    placeholder="Buscar por nombre y marca" 
                    onChange={e => handleInputChange(e)}/>
            <button onClick = {e => handleSubmit(e)}className={style.btn} >Search</button>
        </div>
    );
};

export default SearchBar;