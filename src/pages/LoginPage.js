import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import styles from "./LoginPage.module.css";
const LoginPage = () => {
  const navigate = useNavigate();

  const onBOOKETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.loginPage}>
      <nav className={styles.navbarMsl} id="navbar" navbar>
        <div className={styles.icon}>
          <img className={styles.phbookThinIcon} alt="" src="/phbookthin.svg" />
          <div className={styles.bookE} onClick={onBOOKETextClick}>
            BOOK-E
          </div>
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
      <img className={styles.bgBlurIcon} alt="" src="/bg_blur1.svg" />
      <div className={styles.loginSectionWrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
