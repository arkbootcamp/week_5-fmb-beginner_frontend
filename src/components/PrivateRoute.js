import React from "react";
import { Route, Redirect } from "react-router-dom";

const checkLogin = () => {
  //check token
  //jika token valid maka sudah login
  //jika token tidak valid maka disuruh login lagi
  return true;
};

const PrivateRoute = ({ children, ...rest }) => {
  //   console.log(props);
  return (
    //header
    //<Content>{Children}<Content>
    <Route
      {...rest}
      render={({ location }) => {
        // console.log(match);
        return checkLogin() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: location,
                msg: "Silahkan Login Terlebih Dahulu",
              },
            }}
          />
        );
      }}
    />
    //footer
  );
};

export default PrivateRoute;


//check token di FE
//jika token ada maka lakukan request ke BE
//jika token tidak valid maka redirect ke halaman login, msg => token anda telah expire, silahkan login kembali
//jika token valid maka lanjutkan ke halaman yang dimaksud
//jika token tidak ada maka redirect ke halaman login, msg => silahkan login terlebih dahulu