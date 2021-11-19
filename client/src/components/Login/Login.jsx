import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Login.module.css";
import { Link, useHistory } from "react-router-dom";
import Google from "../Google/Google";
import Forgot from "../Forgot/Forgot";
import { loginLocal } from "../../redux/actions/actions";


const Login = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    contraseña: "",
  });
  const [error, setError] = useState({})

  let validateEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  let validateContraseña = /^.{4,12}$/
  const validate = () => {
    let errors = {};
    if (!validateEmail.test(input.email)) {
      errors.email = "Email requerido";
    }
    if (!validateContraseña.test(input.contraseña)) {
      errors.contraseña = "Desde 4 a 14 digitos";
    }
    return errors;
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error.email && !error.contraseña) {
      dispatch(loginLocal(input));
      history.push('/');
    }
    else { alert("The form is required"); }
    setInput({
      email: "",
      contraseña: "",
    })
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className={style.Login}>
      <form className={style.form} onSubmit={handleSubmit}>
        <p className={style.titleLogin}>INGRESAR</p>
        <div className={style.username}>
          <label className={style.title}>Email</label>
          <input
            className={style.input}
            type="text"
            name='email'
            placeholder="Su usuario o email..."
            value={input.email}
            onChange={handleChange}
          />
          <p className={style.error}>{error.email}</p>
        </div>
        <div className={style.password}>
          <label className={style.title}>Contraseña</label>
          <input
            className={style.input}
            type="password"
            name='contraseña'
            placeholder="Su contraseña..."
            value={input.contraseña}
            onChange={handleChange}
          />
          <p className={style.error}>{error.contraseña}</p>
        </div>
        <div className={style.ctnGoogle}>
          <button type="submit" className={style.btn}>
            INGRESÁ
          </button>
          <Google className={style.google} />
        </div>
        <div className={style.link}>
          No tenes cuenta? <Link to="/register">Registrate</Link>
        </div>
        <div>
          Olvidaste tu contraseña? <Link to="/forgot">Cambiala ahora</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
