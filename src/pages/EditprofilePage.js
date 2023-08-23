import { useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api"; // Import the axios instance you've defined
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EditprofilePage.css";
const EditprofilePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    address: "",
    username: "",
    profile_picture: "",
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
  const onDoneButtonClick = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await api.put("/api/user/profile/edit", formData);
      console.log(response.data); // Response from the backend
      // Handle success or navigate to another page
      navigate("/userprofile-page"); // Redirect to the desired page
    } catch (error) {
      console.error(error.response.data); // Error response from the backend
      // Handle error, show error message to the user
    }
  }, [navigate, formData]);
  const onIconContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onHomePageClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/userprofile-page");
  }, [navigate]);

  const onLogoutContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);


  return (
    <div className="editprofile-page">
      <img
        className="pic-left-align-icon1"
        alt=""
        src="/pic-leftalign@2x.png"
      />
      <header className="navbar7">
        <div className="icon7" onClick={onIconContainerClick}>
          <div className="book-e10">Book-E</div>
          <img className="book-e-icon7" alt="" src="/bookeicon.svg" />
        </div>
        <div className="nav-bttn4">
          <button className="home-page5" onClick={onHomePageClick}>
            Home Page
          </button>
          <button className="profile8" onClick={onProfileClick}>
            <img className="pr-icon4" alt="" src="/pr-icon.svg" />
            <button className="home-page5">Profile</button>
          </button>
          <div className="logout4" onClick={onLogoutContainerClick}>
            <button className="log-out4">Log Out</button>
            <img className="logout-icon4" alt="" src="/logout-icon.svg" />
          </div>
        </div>
      </header>
      <div className="body7">
        <div className="update-your-profile">Update Your Profile</div>
        <form className="edit-form1">
          <div className="dp-link">
            <div className="name4">Name</div>
            <input 
            className="name5" 
            type="text" 
            placeholder="Name" 
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange} />
          </div>
          <div className="phone3">
            <div className="name4">Phone</div>
            <input
              className="phone5"
              type="tel"
              placeholder="Phone"
              id="phone"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
            />
          </div>
          <div className="address3">
            <div className="name4">Address</div>
            <input
              className="address5"
              type="text"
              placeholder="Address"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="username1">
            <div className="user-name2">User Name</div>
            <input
              className="user-name3"
              type="text"
              placeholder="User Name"
              id="user_name"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="dp-link">
            <div className="name4">Add Photo Url</div>
            <input
              className="nameaaa"
              type="text"
              placeholder="Url"
              id="url"
              name="profile_picture"
              value={formData.profile_picture}
              onChange={handleInputChange}
            />
          </div>
          <div className="phone3">
            <div className="name4">Email</div>
            <input
              className="email8"
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="password6">
            <div className="name4">Password</div>
            <input
              className="email8"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="conf-pass1">
            <div className="name4">Confirm Password</div>
            <input
              className="confirm-password3"
              type="text"
              placeholder="Confirm Password"
              id="conf_pass"
            />
          </div>
          <button className="done-button" onClick={onDoneButtonClick}>
            <div className="done">Done</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditprofilePage;
