import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NameCardUploader from "../components/NameCardUploader";
import ReviewCard from "../components/ReviewCard";
import UserCard from "../components/UserCard";
import Footer from "../components/Footer";
import UploadedBooksCardUploader from "../components/UploadedBooksCardUploader";
import styles from "./UploaderProfile.module.css";
const UploaderProfile = () => {
  const navigate = useNavigate();

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

  return (
    <div className={styles.uploaderProfile}>
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
      <img className={styles.bgBlurProfileIcon} alt="" src="/bg_blur4.svg" />
      <NameCardUploader />
      <div className={styles.reviewSection} id="reviews">
        <h1 className={styles.reviews}>Reviews:</h1>
        <div className={styles.frame} id="review_section">
          <ReviewCard />
          <UserCard />
          <Footer />
        </div>
      </div>
      <UploadedBooksCardUploader />
    </div>
  );
};

export default UploaderProfile;
