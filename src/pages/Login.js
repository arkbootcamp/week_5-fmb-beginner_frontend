import React from "react";

const Login = (props) => {
  console.log(props);
  return (
    <div className="container">
      {props.location.state ? <h1>{props.location.state.msg}</h1> : null}
      <h1>SIGN IN</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //axios ke /login dengan method POST body username dan password
          //handle jika berhasil token disimpan di FE
          //handle jika gagal maka disuruh untuk login ulang dengan pesan username/password salah
        }}
      >
        <label className="d-block">Username/Email</label>
        <input className="d-block" type="text" />
        <label className="d-block">Password</label>
        <input className="d-block" type="password" />
        <button className="d-block" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
