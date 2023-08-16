import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EditFormFrame from "../components/EditFormFrame";
import styles from "./EditProfile.module.css";
const EditProfile = () => {
  const navigate = useNavigate();

  const onHomePageClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onLogOutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className={styles.editProfile}>
      <nav className={styles.navbar} id="navbar" navbar>
        <div className={styles.icon}>
          <img
            className={styles.phbookThinIcon}
            alt=""
            src="/phbookthin1.svg"
          />
          <div className={styles.bookE}>BOOK-E</div>
        </div>
        <div className={styles.button}>
          <button className={styles.homePage} onClick={onHomePageClick}>
            Home Page
          </button>
          <div className={styles.forum}>Forum</div>
          <button className={styles.profile} onClick={onProfileClick}>
            <img className={styles.frameIcon} alt="" src="/frame8.svg" />
            <button className={styles.homePage}>Profile</button>
          </button>
          <div className={styles.logout}>
            <button className={styles.logOut} onClick={onLogOutClick}>
              Log Out
            </button>
            <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
          </div>
        </div>
      </nav>
      <img className={styles.blurBgEdIcon} alt="" src="/bg_blur7.svg" />
      <img
        className={styles.userProfilePicIcon}
        alt=""
        src="/rectangle-73@2x.png"
      />
      <h1 className={styles.name}>Edit Your Profile</h1>
      <form className={styles.frameParent} method="post" id="edit">
        <EditFormFrame />
        <input className={styles.photoUpload} type="file" required />
        <div className={styles.frame} onClick={onFrameContainerClick}>
          <button className={styles.editDoneButton}>
            <div className={styles.doneEditing}>Done Editing</div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
