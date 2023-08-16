import { Link } from "react-router-dom";
import BookForm from "./BookForm";
import styles from "./ReceivedOrdersCard.module.css";
const ReceivedOrdersCard = ({
  imageDimensions,
  carImageDimensions,
  imageDimensionsString,
  onUsernameClick,
  onFrameLinkClick,
}) => {
  return (
    <div className={styles.orderedBookCard}>
      <div className={styles.orderedBookCardChild} />
      <Link
        className={styles.username}
        to="/uploader-profile"
        onClick={onUsernameClick}
      >
        #username
      </Link>
      <div className={styles.book1Wrapper}>
        <BookForm
          imageDimensions="/rectangle-119@2x.png"
          carImageDimensions="/rectangle-53@2x.png"
          imageDimensionsString="/frame10.svg"
          propLeft="0.5px"
          propTop="0.5px"
          onFrameLinkClick={onFrameLinkClick}
        />
      </div>
      <button className={styles.confirmButton}>
        <div className={styles.confirm}>Confirm</div>
      </button>
      <div className={styles.orderedBy}>Ordered By:</div>
    </div>
  );
};

export default ReceivedOrdersCard;
