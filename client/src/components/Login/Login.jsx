import React, { useState } from "react";
import style from "./Login.module.css";
import { Link } from "react-router-dom";
import Google from "../Google/Google";
import Forgot from "../Forgot/Forgot";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  return (
    <div className={style.Login}>
      <form className={style.form}>
        <p className={style.titleLogin}>
          <b>INGRESAR </b>{" "}
        </p>
        <div className={style.username}>
          <label className={style.title}>Usuario</label>
          <input
            className={style.input}
            type="text"
            placeholder="Su usuario o email..."
            // value={input.username}
          />
        </div>
        <div className={style.password}>
          <label className={style.title}>Contraseña</label>
          <input
            className={style.input}
            type="password"
            placeholder="Su contraseña..."
            // value={input.password}
          />
        </div>
        <div>
          <button type="submit" className={style.btn}>
            INGRESÁ
          </button>
          <Google />
        </div>
        <div className={style.link}>
          No tenes cuenta? <Link to="/register">Registrate</Link>
        </div>
        <div>
          Olvidaste tu contraseña? <Link to= "/forgot">Cambiala ahora</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
