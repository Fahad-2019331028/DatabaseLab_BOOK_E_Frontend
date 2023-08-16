import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainPage.module.css";
const MainPage = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onSignUpButtonClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className={styles.mainPage}>
      <nav className={styles.navbarMsl} id="navbar" navbar>
        <div className={styles.icon}>
          <img className={styles.phbookThinIcon} alt="" src="/phbookthin.svg" />
          <div className={styles.bookE}>BOOK-E</div>
        </div>
        <div className={styles.button}>
          <button className={styles.about}>About</button>
          <button className={styles.about} onClick={onSignUpClick}>
            Sign Up
          </button>
          <button className={styles.about} onClick={onLoginClick}>
            Login
          </button>
        </div>
      </nav>
      <img className={styles.bgBlurMainPageIcon} alt="" src="/bg_blur9.svg" />
      <button className={styles.loginButton} onClick={onLoginButtonClick}>
        <div className={styles.login1}>Login</div>
      </button>
      <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
        <div className={styles.signUp1}>Sign Up</div>
      </button>
    </div>
  );
};

export default MainPage;
