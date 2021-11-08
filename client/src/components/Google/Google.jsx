import React from "react";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../../redux/actions/actions.js";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

function Google() {
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = (response) => {
    const { tokenId } = response;
    dispatch(loginGoogle({ tokenId }));
    history.push("/"); // para que cuando termine el login, te redirige al home.
    //Para bloquear el carrito tendriamos que ahcer simplemente que chequee el user,
    // y de ser null redirigimos (history.push("/login"))
  };

  const googleFailure = (err) => {
    console.log(err);
    console.log("Google Sing In was unsuccessful :(");
  };

  return (
    <GoogleLogin
      clientId="747892078799-2pubruaa67kl0km9f73nffj3tq10lrn1.apps.googleusercontent.com"
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default Google;
