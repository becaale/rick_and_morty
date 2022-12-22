import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { validate } from "./Validation";
import styles from "./FormLogin.module.css";

export default function FormLogin(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });

    setErrors(
      validate({
        ...userData,
        [property]: value,
      })
    );
  };

  const openResetpass = (event) => {
    document.getElementById("logincontainer").style.display = "none";
    document.getElementById("forgottencontainer").style.display = "block";
  };

  const closeResetpass = (event) => {
    document.getElementById("logincontainer").style.display = "block";
    document.getElementById("forgottencontainer").style.display = "none";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.login(userData)) {
      navigate("/");
    } else {
      alert("usuario o contraseña inconrrecta");
    }
  };

  return (
    <>
      <div id="logincontainer" className={styles.container}>
        <h1 className={styles.h1}>Log In</h1>

        <form>
          <input
            className={styles.input}
            type="email"
            name="username"
            placeholder="E-mail..."
            value={userData.username}
            onChange={handleChange}
          />
          <p className={styles.error}>
            {" "}
            {errors.username}
          </p>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password..."
            value={userData.password}
            onChange={handleChange}
          />
          <p className={styles.error}>
            {" "}
            {errors.password}
          </p>
          <button name="btnLogin" className={styles.button} onClick={handleSubmit}>
            Login
          </button>

          <div id="remembercontainer" className={styles.remembercontainer}>
            <input type="checkbox" id="checkbox-2-1" className={styles.checkbox} />
            <span id="remember" className={styles.remember}>
              Remember me
            </span>
            <span id="forgotten" className={styles.forgotten} onClick={openResetpass}>
              Forgotten password
            </span>
          </div>
        </form>
      </div>

      <div id="forgottencontainer" className={styles.forgottencontainer}>
        <h1 className={styles.h1}>Forgotten</h1>

        <span className={styles.closebtn} onClick={closeResetpass}>
          <img
            className={styles.img}
            src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"
          ></img>
        </span>

        <form>
          <input
            type="email"
            name="username"
            placeholder="E-mail..."
            className={styles.input}
            value={userData.username}
            onChange={handleChange}
          />
          <p className={styles.error}>
            {" "}
            {errors.username}
          </p>
          <button name="btnForgot" className={styles.button} onClick={handleSubmit}>
            Get new password
          </button>
        </form>
      </div>
    </>
  );
}
