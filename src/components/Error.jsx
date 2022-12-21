import React from "react";

import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <div>
          <h1>error 404</h1>
        </div>
      </div>
    </div>
  );
}
