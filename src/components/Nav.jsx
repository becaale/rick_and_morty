import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.navBar}>
       <div></div>

      <div className={styles.all}>
        <div className={styles.lefter}>
          <div className={styles.text}></div>
        </div>
        <div className={styles.left}>
          <div className={styles.text}></div>
        </div>
        <div className={styles.center}>
            <div className={styles.explainer}>
            {/* <span>=</span> */}
          </div>
          <div className={styles.text}></div>
        </div>
        <div className={styles.right}>
          <div className={styles.text}></div>
        </div>
        <div className={styles.righter}>
          <div className={styles.text}> </div>
        </div>
      </div>
      { <SearchBar onSearch={props.onSearch} />}    
    </div>
  );
}
