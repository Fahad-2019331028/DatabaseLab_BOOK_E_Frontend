import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api"; // Import the axios instance you've defined
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignupPage.css";
const SignupPage = () => {
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
  const [isLoading, setIsLoading] = useState(false);
  const onSignUpButtonClick = useCallback(async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('/api/user/register', formData);
      console.log(response.data); // Response from the backend
      // Handle success or navigate to another page
      toast.success("Registration successful")
      navigate('/login-page'); // Redirect to the desired page
    } catch (error) {
      console.error(error.response.data);
      toast.error("Fill the form correctly") // Error response from the backend
      // Handle error, show error message to the user
    }
  }, [navigate, formData]);

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onIconContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="signup-page">
      <main className="body3">
        <img
          className="pic1-mainpage-icon2"
          alt=""
          src="/pic1mainpage@2x.png"
        />
        <h1 className="book-e5">BOOK-E</h1>
        <h5 className="recycle-reuse1">Recycle , Reuse , Ecological</h5>
        <div className="signup-sec">
          <h2 className="sign-up1">Sign Up</h2>
          <form className="signup-form">
            <div className="name">
              <div className="confirm-password">Name</div>
              <input
                className="name2"
                type="text"
                placeholder="Name"
                required
                id="name"
                name="name" // Match the name attribute to the property in formData
                value={formData.name} // Set value from state
                onChange={handleInputChange}
              />
            </div>
            <div className="phone">
              <div className="confirm-password">Phone</div>
              <input
                className="phone2"
                type="tel"
                placeholder="Phone"
                required
                id="phone"
                name="phone_number" // Match the name attribute to the property in formData
                value={formData.phone_number} // Set value from state
                onChange={handleInputChange}
              />
            </div>
            <div className="address">
              <div className="confirm-password">Address</div>
              <input
                className="address2"
                type="text"
                placeholder="Address"
                required
                id="address"
                name="address" // Match the name attribute to the property in formData
                value={formData.address} // Set value from state
                onChange={handleInputChange}
              />
            </div>
            <div className="username">
              <div className="user-name">User Name</div>
              <input
                className="user-name1"
                type="text"
                placeholder="User Name"
                required
                id="user_name"
                name="username" // Match the name attribute to the property in formData
                value={formData.username} // Set value from state
                onChange={handleInputChange}
              />
            </div>
            <div className="phone">
              <div className="confirm-password">Email</div>
              <input
                className="email5"
                type="email"
                placeholder="Email"
                required
                id="email"
                name="email" // Match the name attribute to the property in formData
                value={formData.email} // Set value from state
                onChange={handleInputChange}
              />
            </div>
            <div className="password3">
              <div className="confirm-password">Password</div>
              <input
                className="email5"
                type="password"
                placeholder="Password"
                required id="password"
                name="password" // Match the name attribute to the property in formData
                value={formData.password} // Set value from state
                onChange={handleInputChange}
              />
            </div>
            <div className="conf-pass">
              <div className="confirm-password">Confirm Password</div>
              <input
                className="confirm-password1"
                type="Password"
                placeholder="Confirm Password"
                required
                id="conf_pass"
              />
            </div>
            <button className="sign-up-button1" onClick={onSignUpButtonClick}>
            <div className="sign-up2">Sign Up</div>
        </button>
          </form>
          <a className="have-an-account" onClick={onHaveAnAccountClick}>
            Have an account? Login here.
          </a>
        </div>
      </main>
      <header className="navbar3">
        <div className="icon3" onClick={onIconContainerClick}>
          <div className="book-e6">Book-E</div>
          <img className="book-e-icon3" alt="" src="/bookeicon.svg" />
        </div>
      </header>

    </div>
  );
};

export default SignupPage;
