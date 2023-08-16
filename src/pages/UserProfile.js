import React, { useState,useCallback, useEffect } from "react";
import { api } from '../services/api';
import { useNavigate } from "react-router-dom";
import UploadedBooksCardUser from "../components/UploadedBooksCardUser";
import ProfileForm from "../components/ProfileForm";
import styles from "./UserProfile.module.css";
const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch user profile
        const profileResponse = await api.get("/api/user/profile"); // Replace with your API endpoint
        const profileData = profileResponse.data;
        setUser(profileData);

        // Fetch user's books
        const booksResponse = await api.get(`/api/book/userbooks/${profileData.user_id}`); // Replace with your API endpoint
        const booksData = booksResponse.data;
        setBooks(booksData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);
  const onFrameLinkClick = useCallback(() => {
    navigate("/book-details");
  }, [navigate]);

  const onBOOKETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomePageClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onLogOutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);
  console.log(user)
  return (
    <div className={styles.userProfile}>
      <nav className={styles.navbar} id="navbar" navbar>
        <div className={styles.icon}>
          <img className={styles.phbookThinIcon} alt="" src="/phbookthin.svg" />
          <div className={styles.bookE} onClick={onBOOKETextClick}>
            BOOK-E
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.homePage} onClick={onHomePageClick}>
            Home Page
          </button>
          <div className={styles.aboutUs}>About Us</div>
          <button className={styles.profile} onClick={onProfileClick}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <button className={styles.homePage}>Profile</button>
          </button>
          <div className={styles.logout}>
            <button className={styles.logOut} onClick={onLogOutClick}>
              Log Out
            </button>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
      </nav>
      <img className={styles.bgBlurProfileIcon} alt="" src="/bg_blur5.svg" />
      
      <h1 className={styles.name}>{user.username}</h1>
      <div className={styles.reviewSection} id="reviews">
        <h1 className={styles.reviews}>Reviews:</h1>
        <div className={styles.frame} id="review_section">
          <div className={styles.rev} id="review_no">
            <a className={styles.user}>#user</a>
            <p className={styles.njcnjzncnzxjcnjkdscjsjnzkcnkds}>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                njcnjzncnzxjcnjkdscjsjnzkcnkdsnkvncxjvjkn
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                zjkxjbjxbvjxcbjvbdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                cjxkbvjcxjkvdjkvkskvis
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                jkcbvjxbjvbjxbvjkdsjkv
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                kfdnvksdnkvnsdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>jvnjdn</span>
            </p>
          </div>
          <div className={styles.rev} id="review_no">
            <a className={styles.user}>#user</a>
            <p className={styles.njcnjzncnzxjcnjkdscjsjnzkcnkds}>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                njcnjzncnzxjcnjkdscjsjnzkcnkdsnkvncxjvjkn
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                zjkxjbjxbvjxcbjvbdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                cjxkbvjcxjkvdjkvkskvis
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                jkcbvjxbjvbjxbvjkdsjkv
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                kfdnvksdnkvnsdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>jvnjdn</span>
            </p>
          </div>
          <div className={styles.rev} id="review_no">
            <a className={styles.user}>#user</a>
            <p className={styles.njcnjzncnzxjcnjkdscjsjnzkcnkds}>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                njcnjzncnzxjcnjkdscjsjnzkcnkdsnkvncxjvjkn
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                zjkxjbjxbvjxcbjvbdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                cjxkbvjcxjkvdjkvkskvis
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                jkcbvjxbjvbjxbvjkdsjkv
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>
                kfdnvksdnkvnsdk
              </span>
              <span className={styles.zjkxjbjxbvjxcbjvbdk}>jvnjdn</span>
            </p>
          </div>
        </div>
      </div>
      <UploadedBooksCardUser />
      <ProfileForm />
    </div>
  );
};

export default UserProfile;
