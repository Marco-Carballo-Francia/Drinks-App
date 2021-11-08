import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import { Link, useHistory, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import style from './NavBar.module.css';
import iconHome from '../../Iconos/icon-Home.png';
import { BsCart2 } from "react-icons/bs";


const NavBar = () => {

    const location= useLocation();
    const history= useHistory();
    const dispatch= useDispatch();
    const [user, setUser] =useState(JSON.parse(localStorage.getItem('profile'))) //busco el usuario que guarde en la localstorage EN EL REDUCER
    
    useEffect(()=>{
        const token= user?.token;
        setUser(JSON.parse(localStorage.getItem('profile'))) //Con esto muestro el usuario (si es que hay)
        //en caso de estar null, se usa el bloque de codigo estandar. NO LE PUSE ESTILOS (porque soy malisimo)
    }, [location])


    const logout= () => {
        dispatch({type: "LOGOUT"})
        history.push("/");
        setUser(null);
    }

    console.log("user",user)

    return (
        <div className={style.NavBar}>
            <Link to='/'><img className={style.imgIcono} src={iconHome} alt="icono de home" /></Link>
            <div >
                <SearchBar />
                <Categories />
            </div>

            <div className={style.ctnRegis}>
                <Link to='/carrito'>
                    <BsCart2 className={style.linkCart} />
                </Link>
                {
                    user? (
                            <>
                            <img className={style.userImg} src={user.result?.imageUrl} alt="" />
                            <p className={style.nameUser}>{user.result?.name}</p>
                            <button onClick={logout} className={style.logout}>Salir</button>
                        </>
                        ): 
                    <>
                    <Link className={style.login} to='/login'>
                    <button className={style.btns}>Loguearte</button>
                    </Link>
                    <Link className={style.register} to='/register'>
                    <button className={style.btns}>Registrarte</button>
                    </Link>
                    </>

                }
               
            </div>

        </div>
    );
};

export default NavBar;