import { useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { api } from "../services/api";
const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const onLoginButtonClick = useCallback(async(e) => {
    e.preventDefault()
    try {
      const response = await api.post('/api/user/login', formData);
      console.log(response.data.token);
      localStorage.setItem("token",response.data.token) // Response from the backend, including token
      // Store the token in local storage or context
      
      navigate("/home-page");// Redirect to another page or perform other actions
    } catch (error) {
      console.error(error.response.data); // Error response from the backend
      // Handle error, show error message to the user
    }
  }, [navigate,formData]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <form className={styles.loginSection} method="post">
      <img
        className={styles.loginSectionChild}
        alt=""
        src="/rectangle-15@2x.png"
      />
      <button className={styles.loginButton} onClick={onLoginButtonClick}>
        <div className={styles.login}>Login</div>
      </button>
      <h2 className={styles.login1}>Login</h2>
      <section className={styles.passwordInput} id="password_input">
        <img className={styles.passwordInputChild} alt="" src="/line-1.svg" />
        <div className={styles.frame}>
          <div className={styles.password}>Password</div>
          <input
            className={styles.password1}
            type="password"
            placeholder="Password"
            required
            id="password"
            name="password" // Match the name attribute to the property in formData
            value={formData.password} // Set value from state
            onChange={handleInputChange}
          />
        </div>
      </section>
      <div className={styles.emailInput} id="email_input">
        <img className={styles.emailInputChild} alt="" src="/line-11.svg" />
        <div className={styles.frame1}>
          <div className={styles.email}>Email</div>
          <input
            className={styles.email1}
            type="email"
            placeholder="Email"
            required
            id="email"
            name="email" // Match the name attribute to the property in formData
            value={formData.email} // Set value from state
            onChange={handleInputChange}
          />
        </div>
      </div>
      <a className={styles.dontHaveAn} onClick={onDontHaveAnClick}>
        Don’t have an account? Sign Up here.
      </a>
    </form>
  );
};

export default LoginForm;
