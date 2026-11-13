import styles from "./Header.module.css";

function Header({ total, doneCount, theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img className={styles.logo} src="/favicon.svg" alt="" />
        <h1>Planning</h1>
      </div>

      <div className={styles.side}>
        {total > 0 && (
          <p className={styles.progress}>
            {doneCount} of {total} done
          </p>
        )}
        <button
          type="button"
          className={styles.themeBtn}
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? (
            /* sun */
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            /* moon */
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
