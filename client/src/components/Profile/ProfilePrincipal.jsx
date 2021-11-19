import React from 'react';
import Dates from './Dates';
import Shopping from './Shopping';
import Addresses from './Addresses';
import style from './Styles/ProfilePrincipal.module.css'

function Profile() {

  return (
    <div>
      <div className={style.ctn}>
        <Dates />
        <Addresses />
      </div>
      <div>
        <Shopping />
      </div>

    </div>
  )
}

export default Profile;
