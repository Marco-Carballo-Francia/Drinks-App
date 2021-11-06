import React, { useState } from 'react';
import {useDispatch} from "react-redux"
import style from './Login.module.css';
import {Link, useHistory} from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const Login = () => {
    const history=useHistory();
    const dispatch= useDispatch();
    const [input, setInput] = useState({
        username: '',
        password: ''
    });

    const googleSuccess = async(res) => {


        const result= res?.profileObj; //aca esta toda la data relevante(email, token, nombre, foto, etc)
        //la idea mas adelante, es llevar esta data al back (deberia ser facil) y ahi checkear si existe, 
        //y usar la lógica que usen los chicos para validar a los otros usuarios.
        //pero con una funcion distinta que no corrobore la password (ya que aca no tiene)
        const token= res?.tokenId;
        const data = { result, token }
        try {
          dispatch({type: "AUTH", data: data })  //VER REDUCER:asi tira las actions el chabon, me dio cosa cambiarlas
          history.push("/"); // para que cuando termine el login, te redirige al home.
            //Para bloquear el carrito tendriamos que ahcer simplemente que chequee el user, y de ser null redirigimos (history.push("/login"))
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (err) => {
        console.log(err);
        console.log("Google Sing In was unsuccessful :(")
    }

    return (
        <div className={style.Login}>
            <form className={style.form}>
                <p className={style.titleLogin}><b>INGRESAR </b> </p>
                <div className={style.username}>
                    <label className={style.title}>Usuario</label>
                    <input className={style.input}
                        type="text"
                        placeholder='Su usuario o email...'
                        // value={input.username}
                    />
                </div>
                <div className={style.password}>
                    <label className={style.title}>Contraseña</label>
                    <input className={style.input}
                        type="text"
                        placeholder='Su contraseña...'
                        // value={input.password}
                    />
                </div>
                <div>
                <GoogleLogin 
                    clientId="747892078799-2pubruaa67kl0km9f73nffj3tq10lrn1.apps.googleusercontent.com"
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
                <button type="submit" className={style.btn}>INGRESÁ</button>
                </div>
                <div className={style.link}>
                    No tenes cuenta? <Link to="/register">Registrate</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
