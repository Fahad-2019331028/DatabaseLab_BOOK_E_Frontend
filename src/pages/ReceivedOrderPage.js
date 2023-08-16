import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReceivedOrdersCard from "../components/ReceivedOrdersCard";
import styles from "./ReceivedOrderPage.module.css";
const ReceivedOrderPage = () => {
  const navigate = useNavigate();

  const onUsernameClick = useCallback(() => {
    navigate("/uploader-profile");
  }, [navigate]);

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
    <div className={styles.receivedOrderPage}>
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
      <img className={styles.bgBlurOrIcon} alt="" src="/bg_blur10.svg" />
      <div className={styles.orderedBookSection}>
        <ReceivedOrdersCard
          imageDimensions="/rectangle-119@2x.png"
          carImageDimensions="/rectangle-53@2x.png"
          imageDimensionsString="/frame10.svg"
          onUsernameClick={onUsernameClick}
          onFrameLinkClick={onFrameLinkClick}
        />
        <ReceivedOrdersCard
          imageDimensions="/rectangle-120@2x.png"
          carImageDimensions="/rectangle-54@2x.png"
          imageDimensionsString="/frame11.svg"
          onUsernameClick={onUsernameClick}
          onFrameLinkClick={onFrameLinkClick}
        />
        <ReceivedOrdersCard
          imageDimensions="/rectangle-121@2x.png"
          carImageDimensions="/rectangle-55@2x.png"
          imageDimensionsString="/frame12.svg"
          onUsernameClick={onUsernameClick}
          onFrameLinkClick={onFrameLinkClick}
        />
        <ReceivedOrdersCard
          imageDimensions="/rectangle-122@2x.png"
          carImageDimensions="/rectangle-53@2x.png"
          imageDimensionsString="/frame10.svg"
          onUsernameClick={onUsernameClick}
          onFrameLinkClick={onFrameLinkClick}
        />
      </div>
      <h1 className={styles.receivedOrders}>Received Orders</h1>
    </div>
  );
};

export default ReceivedOrderPage;
