import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa";
import style from "./Review.module.css";
import { rateProduct } from "../../redux/actions/actions";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
}

export default function Review({ id }) {

  const dispatch = useDispatch();

  const stars = Array(5).fill(0);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = (value) => {
    setCurrentValue(value)
  };

  const handleMouseOver = (value) => {
    setHoverValue(value)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  };

  const handleSubmit = () => {
      dispatch(rateProduct({number: currentValue, id }))
      alert("Review recibida!")
  }

  return (
    <div className={style.ctnSuperior}>
      <h1 className={style.titulo} >Califica este producto</h1>
      <div >
        {
          stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={() => handleMouseLeave}
              />
            )
          })
        }
      </div>
      <textarea className={style.textarea}
        placeholder="Deja un comentario..."
      />
      <button onClick={() => handleSubmit()} className={style.btnEnviar}>Enviar</button>
    </div>
  )
};