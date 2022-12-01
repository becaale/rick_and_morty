import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div>
      {/*      <div className={styles.cont}>
        <input type="search" />
        <button className={styles.btn} onClick={props.onSearch}>
          Agregar
        </button>
      </div> */}
       <div className={styles.container}>
        <input className={styles.input} type="text" placeholder="Search..." />
        <div className={styles.search}></div>
      </div> 
      
    </div>
  );
}
