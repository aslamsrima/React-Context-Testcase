import React from 'react';
import logo from '../assets/logo.svg';
import styles from '../styles/App.module.css';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { theme, setTheme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={styles.App}>
      <header className={`${styles.AppHeader} ${theme === 'light' && styles.AppHeaderLight}`}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <a className={styles.AppLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React {theme}
        </a>
        <button className={styles.ToggleBtn} onClick={() => navigate('/login')}>
          Login
        </button>
        <button className={styles.ToggleBtn} onClick={() => navigate('/sign-up')}>
          Sign Up
        </button>
        <button className={styles.ToggleBtn} onClick={() => setTheme('light')}>
          Light
        </button>
        <button className={styles.ToggleBtn} onClick={() => setTheme('dark')}>
          Dark
        </button>
        <button className={styles.ToggleBtn} onClick={toggleTheme}>
          Change Theme
        </button>
      </header>
    </div>
  );
}

export default Home;
