import React from 'react';
import { useDispatch, useSelector } from "react-redux";



//email, imagen, name, ticket, 

function Profile() {
const dispatch = useDispatch();
const {{ us}er } = useSelector((state) => state.user);

const { id } = user;
console.log(user)
          {users &&
        user.map((x) => (
          <div>
            <h2>{x.email}</h2>
          </div>
           <div>
           <h2>{x.name}</h2>
         </div>
          <div>
          <h2>{x.imagen}</h2>
        </div>
         <div>
         <h2>{x.adress}</h2>
       </div>
    //     <div>
    //     <h2>{x.ticket}</h2>
    //   </div>
        ))}
            
        </div>
    )
}

export default Profile;
