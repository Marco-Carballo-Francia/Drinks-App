import React from 'react';
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.user);

  console.log(user)
  return (
    <div>
        <div>
          <h2>{user.email}</h2>
        </div>
        <div>
          <h2>{user.name}</h2>
        </div>
        <div>
          <h2>{user.imagen}</h2>
        </div>
        <div>
          <h2>{user.adress}</h2>
        </div>
    </div>
  )
}

export default Profile;
