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
  
  const handleSubmit = (event) => {
    props.login(userData);
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
}
