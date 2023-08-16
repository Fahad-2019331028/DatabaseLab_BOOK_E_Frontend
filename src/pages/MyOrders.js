import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OrderCardForm from "../components/OrderCardForm";
import styles from "./MyOrders.module.css";
const MyOrders = () => {
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
    <div className={styles.myOrders}>
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
      <img className={styles.bgBlurOrIcon} alt="" src="/bg_blur8.svg" />
      <div className={styles.orderSection}>
        <OrderCardForm
          imageDimensions="/rectangle-116@2x.png"
          onFrameLinkClick={onFrameLinkClick}
        />
        <OrderCardForm
          imageDimensions="/rectangle-117@2x.png"
          frameLeft="309px"
          onFrameLinkClick={onFrameLinkClick}
        />
      </div>
      <h1 className={styles.myOrder}>My Orders</h1>
    </div>
  );
};

export default MyOrders;
