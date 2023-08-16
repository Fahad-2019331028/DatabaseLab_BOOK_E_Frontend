import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import styles from "./SignUpPage.module.css";
const SignUpPage = () => {
  const navigate = useNavigate();

  const onBOOKETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={styles.signUpPage}>
      <nav className={styles.navbarMsl} id="navbar" navbar>
        <div className={styles.icon}>
          <img className={styles.phbookThinIcon} alt="" src="/phbookthin.svg" />
          <div className={styles.bookE} onClick={onBOOKETextClick}>
            BOOK-E
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.about}>About</button>
          <button className={styles.about}>Sign Up</button>
          <button className={styles.about} onClick={onLoginClick}>
            Login
          </button>
        </div>
      </nav>
      <img className={styles.bgBlurIcon} alt="" src="/bg_blur2.svg" />
      <div className={styles.signUpSectionWrapper}>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
