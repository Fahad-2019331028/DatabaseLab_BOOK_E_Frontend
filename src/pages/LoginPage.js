import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import "./LoginPage.css";
const LoginPage = () => {
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

  const onIconContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="login-page">
      <main className="body2">
        <img
          className="pic1-mainpage-icon1"
          alt=""
          src="/pic1mainpage@2x.png"
        />
        <h1 className="book-e3">BOOK-E</h1>
        <h5 className="recycle-reuse">Recycle , Reuse , Ecological</h5>
        <div className="login-sec">
          <h2 className="login1">Login</h2>
          <form className="login-form" method="post">
            <div className="email">
              <div className="email1">Email</div>
              <input
                className="email2"
                type="email"
                placeholder="Email"
                required
                id="email"
                name="email" // Match the name attribute to the property in formData
                value={formData.email} // Set value from state
                onChange={handleInputChange}
              />
            </div>
            <div className="password">
              <div className="email1">Password</div>
              <input
                className="email2"
                type="password"
                placeholder="Password"
                required id="password"
                name="password" // Match the name attribute to the property in formData
                value={formData.password} // Set value from state
                onChange={handleInputChange}
              />
            </div>
            <button className="login-button1" onClick={onLoginButtonClick}>
              <div className="login2">Login</div>
            </button>
          </form>
          <a className="dont-have-an" onClick={onDontHaveAnClick}>
            Don’t have an account? Sign up here.
          </a>
        </div>
      </main>
      <header className="navbar2">
        <div className="icon2" onClick={onIconContainerClick}>
          <div className="book-e4">Book-E</div>
          <img className="book-e-icon2" alt="" src="/bookeicon.svg" />
        </div>
      </header>
    </div>
  );
};

export default LoginPage;
