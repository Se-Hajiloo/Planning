import styles from "./Header.module.css";

function Header({ total, doneCount }) {
  return (
    <header className={styles.header}>
      <h1>Planning</h1>
      {total > 0 && (
        <p className={styles.progress}>
          {doneCount} of {total} done
        </p>
      )}
    </header>
  );
}

export default Header;
