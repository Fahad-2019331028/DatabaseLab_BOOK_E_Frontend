import styles from "./NameCardUploader.module.css";
const NameCardUploader = () => {
  return (
    <div className={styles.infoSection}>
      <div className={styles.phone} id="phone_no">
        <div className={styles.phoneNumber}>Phone Number:</div>
        <div className={styles.phoneNo}>#phone_no</div>
      </div>
      <h1 className={styles.name}>Name</h1>
      <div className={styles.address} id="address">
        <div className={styles.address1}>Address :</div>
        <div className={styles.adress}>#adress</div>
      </div>
      <img
        className={styles.uploaderPicIcon}
        alt=""
        src="/rectangle-7@2x.png"
      />
      <div className={styles.email}>
        <div className={styles.email1}>Email:</div>
        <div className={styles.email2}>#email</div>
      </div>
      <div className={styles.name1}>
        <div className={styles.rating}>Rating</div>
        <div className={styles.rating}>#Rating</div>
      </div>
    </div>
  );
};

export default NameCardUploader;
