import SearchBar from "./SearchBar.jsx";
import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.navBar}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
