import { useState,useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../services/api';
import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const onEditButtonClick = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch user profile
        const profileResponse = await api.get("/api/user/profile/"); // Replace with your API endpoint
        const profileData = profileResponse.data;
        setUser(profileData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserProfile();
  }, []);
  console.log(user)
  return (
    <div className={styles.infoSection}>
      <button className={styles.editButton} onClick={onEditButtonClick}>
        <div className={styles.editProfile}>Edit Profile</div>
      </button>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.phone} id="phone_no">
            <div className={styles.phoneNumber}>Phone Number:</div>
            <div className={styles.phoneNo}>{user.phone_number}</div>
          </div>
          <div className={styles.address} id="address">
            <div className={styles.address1}>Address :</div>
            <div className={styles.adress}>{user.address}</div>
          </div>
          <div className={styles.email}>
            <div className={styles.email1}>Email:</div>
            <div className={styles.email2}>{user.email}</div>
          </div>
          <div className={styles.rating}>
            <div className={styles.rating1}>Rating</div>
            <div className={styles.rating1}>{user.rating || "N/A"}</div>
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="/rectangle-71@2x.png" />
      </div>
    </div>
  );
};

export default ProfileForm;
