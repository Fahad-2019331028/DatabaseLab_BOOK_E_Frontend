import styles from "./EditFormFrame.module.css";
const EditFormFrame = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.name}>
        <div className={styles.phoneNumber}>Name</div>
        <input
          className={styles.email}
          type="text"
          placeholder="Name"
          id="name"
        />
      </div>
      <div className={styles.password}>
        <div className={styles.name}>
          <div className={styles.phoneNumber}>Password</div>
          <input
            className={styles.email}
            type="password"
            placeholder="password"
            required
            id="password"
          />
        </div>
      </div>
      <div className={styles.name}>
        <div className={styles.phoneNumber}>Email</div>
        <input
          className={styles.email}
          type="email"
          placeholder="Email"
          required
          id="email"
        />
      </div>
      <div className={styles.name}>
        <div className={styles.phoneNumber}>Address</div>
        <input
          className={styles.email}
          type="text"
          placeholder="Address"
          id="address"
        />
      </div>
      <div className={styles.name}>
        <div className={styles.phoneNumber}>Phone Number</div>
        <input
          className={styles.email}
          type="text"
          placeholder="Number"
          id="phone_number"
        />
      </div>
      <div className={styles.name}>
        <div className={styles.phoneNumber}>User Name</div>
        <input
          className={styles.email}
          type="text"
          placeholder="User Name"
          id="user_name"
        />
      </div>
    </div>
  );
};

export default EditFormFrame;
