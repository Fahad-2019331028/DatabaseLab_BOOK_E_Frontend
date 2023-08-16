import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./UploaderCard.module.css";
const UploaderCard = ({owner}) => {
  const navigate = useNavigate();
if(owner)
  console.log("owner found")
  const onViewClick = useCallback(() => {
    navigate("/uploader-profile");
  }, [navigate]);

  return (
    <div className={styles.uploader} id="uploader">
      <img className={styles.uploaderChild} alt="" src="/rectangle-17@2x.png" />
      <img
        className={styles.aploaderPicIcon}
        alt=""
        src="/rectangle-51@2x.png"
      />
      <Link className={styles.view} to="/uploader-profile" onClick={onViewClick}>
        <div className={styles.frame}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <img className={styles.frameIcon} alt="" src="/frame4.svg" />
          </div>
        </div>
        <div className={styles.viewProfile}>View Profile......</div>
      </Link>
      <h1 className={styles.name} id="tittle">
        {owner.username}
      </h1>
      <h3 className={styles.uplodedBy}>Uploded by</h3>
    </div>
  );
};

export default UploaderCard;
