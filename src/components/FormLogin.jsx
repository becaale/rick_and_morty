import React, { useState } from "react";

import { validate } from "./Validation";
import styles from "./FormLogin.module.css";

export default function FormLogin(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const [errors, setErrors] = useState({ username: "", password: "" });

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
    props.login(userData);
  };

  return (
    <>
      {/* <div className={styles.container}>
        <div className={styles.form}>
          <div>
            <label htmlFor="username">Usuario: </label>
            <input
              name="username"
              type="text"
              placeholder="Mail..."
              value={userData.username}
              onChange={handleChange}
            />
            <p className="error">{errors.username}</p>
          </div>
          <div>
            <label htmlFor="password">Contraseña: </label>
            <input
              name="password"
              type="text"
              placeholder="Password..."
              value={userData.password}
              onChange={handleChange}
            />
            <p className="error">{errors.password}</p>
          </div>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div> */}

      {/*  <div id="loginbutton">
        <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png"></img>
      </div> */}
      {/* <div id="loginbutton" className={styles.loginbutton}>
        <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png"></img>
      </div> */}
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
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password..."
            value={userData.password}
            onChange={handleChange}
          />
          <button className={styles.button} onClick={handleSubmit}>
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
          <input type="email" name="username" placeholder="E-mail..." className={styles.input} />
          <button className={styles.button} onClick={handleSubmit}>
            Get new password
          </button>
        </form>
      </div>
    </>
  );
}
