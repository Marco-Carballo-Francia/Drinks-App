import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritos } from "../../redux/actions/actions.js";

const Favoritos = () => {
    const dispatch = useDispatch();
  const { favoritos, user } = useSelector((state) => state.user);
  const id = user?._id;
  console.log('favoritos', favoritos);

  useEffect(() => {
    dispatch(getFavoritos(id))
}, [dispatch, id]);


  return (
    <div>
      {favoritos?.map((x) => (
        <div>{x.nombre}</div>
      ))}
    </div>
  );
};

export default Favoritos;
