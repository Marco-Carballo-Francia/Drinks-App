import React from 'react';
import Dates from './Dates';
import Shopping from './Shopping';
import Addresses from './Addresses';


// import { useSelector } from "react-redux";

function Profile() {
  // const { user } = useSelector((state) => state.user);

  // console.log(user)
  return (
    <div>
      <div>
        <h3>Mis datos</h3>
        <Dates />
      </div>
      <div>
        <h3>Mis direcciones</h3>
        <Addresses />
      </div>
      <div>
        <h3>Mis compras</h3>
        <Shopping />
      </div>

    </div>
  )
}

export default Profile;
