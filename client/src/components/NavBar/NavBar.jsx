import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import style from './NavBar.module.css';
import iconHome from '../../Iconos/icon-Home.png';
import { BsCart2 } from "react-icons/bs";
import { checkout } from '../../redux/actions/actions';
import AdminButton from "../Admin/AdminButton/AdminButton"


const NavBar = () => {

    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))) //busco el usuario que guarde en la localstorage EN EL REDUCER
    const { user } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(checkout());
    }, [user, dispatch])


    const logout = () => {
        dispatch({ type: "LOGOUT" });
        dispatch(checkout());
        history.push("/");
    }

    return (
        <div className={style.NavBar}>
            <Link to='/'>
                <img className={style.imgIcono} src={iconHome} alt="icono de home" />
            </Link>
            <div >
            {/* <AdminButton/> */}
                <SearchBar />
                <Categories />
            </div>
            <div className={style.ctnRegis}>
                <Link to='/carrito'>
                    <BsCart2 className={style.linkCart} />
                </Link>
                {
                    user !== null ? (
                        <>
                            <Link className={style.link} to='/profile'>  <p className={style.nameUser}>Hola, {
                                user?.nombre ? user?.nombre : user?.user?.nombre
                            }</p>
                            </Link>
                            <button onClick={logout} className={style.logout}>Salir</button>
                        </>
                    ) : (
                        <>
                            <Link className={style.login} to='/login'>
                                <button className={style.btns}>Iniciar Sección</button>
                            </Link>
                            <Link className={style.register} to='/register'>
                                <button className={style.btns}>Registrarte</button>
                            </Link>
                        </>
                    )}
            </div>
        </div>
    );
};

export default NavBar;