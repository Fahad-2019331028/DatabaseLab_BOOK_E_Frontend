import { useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpForm.module.css";
import { api } from '../services/api';
const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    phone_number: "",
    address: "",
    password: ""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const onSignUpButtonClick = useCallback(async (e) => {
    e.preventDefault()
    try {


      const response = await api.post('/api/user/register', formData);
      console.log(response.data); // Response from the backend
      // Handle success or navigate to another page
      navigate('/login-page'); // Redirect to the desired page
    } catch (error) {
      console.error(error.response.data); // Error response from the backend
      // Handle error, show error message to the user
    }
  }, [navigate, formData]);

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <form className={styles.signUpSection} method="post">
      <img
        className={styles.signUpSectionChild}
        alt=""
        src="/rectangle-16@2x.png"
      />
      <button className={styles.signUpButton} onClick={onSignUpButtonClick}>
        <div className={styles.signUp}>Sign UP</div>
      </button>
      <h2 className={styles.getStarted}>Get started</h2>
      <section className={styles.confPasswordInput} id="password_input">
        <img
          className={styles.confPasswordInputChild}
          alt=""
          src="/line-1.svg"
        />
        <div className={styles.frame}>
          <div className={styles.confirmPassword}>Confirm Password</div>
          <input
            className={styles.confirmPassword1}
            type="password"
            placeholder="Confirm Password"
            required
            id="confrim_password"
          />
        </div>
      </section>
      <section className={styles.passwordInput} id="password_input">
        <img
          className={styles.confPasswordInputChild}
          alt=""
          src="/line-1.svg"
        />
        <div className={styles.frame}>
          <div className={styles.confirmPassword}>Password</div>
          <input
            className={styles.confirmPassword1}
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
        <img className={styles.emailInputChild} alt="" src="/line-12.svg" />
        <div className={styles.frame2}>
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
      <div className={styles.userName} id="email_input">
        <img className={styles.emailInputChild} alt="" src="/line-12.svg" />
        <div className={styles.frame2}>
          <div className={styles.email}>User Name</div>
          <input
            className={styles.email1}
            type="text"
            placeholder="User Name"
            required
            id="user_name"
            name="username" // Match the name attribute to the property in formData
            value={formData.username} // Set value from state
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.address} id="email_input">
        <img className={styles.emailInputChild} alt="" src="/line-12.svg" />
        <div className={styles.frame2}>
          <div className={styles.email}>Adsress</div>
          <input
            className={styles.email1}
            type="text"
            placeholder="address"
            required
            id="address"
            name="address" // Match the name attribute to the property in formData
            value={formData.address} // Set value from state
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.phone} id="email_input">
        <img className={styles.emailInputChild} alt="" src="/line-12.svg" />
        <div className={styles.frame2}>
          <div className={styles.email}>Phone</div>
          <input
            className={styles.email1}
            type="tel"
            placeholder="Phone"
            required
            id="phone"
            name="phone_number" // Match the name attribute to the property in formData
            value={formData.phone_number} // Set value from state
            onChange={handleInputChange}
          />
        </div>
      </div>
      <a className={styles.haveAnAccount} onClick={onHaveAnAccountClick}>
        Have an account? Login here.
      </a>
      <div className={styles.name} id="email_input">
        <img className={styles.emailInputChild} alt="" src="/line-12.svg" />
        <div className={styles.frame2}>
          <div className={styles.email}>Name</div>
          <input
            className={styles.email1}
            type="text"
            placeholder="Name"
            required
            id="name"
            name="name" // Match the name attribute to the property in formData
            value={formData.name} // Set value from state
            onChange={handleInputChange}
          />
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
