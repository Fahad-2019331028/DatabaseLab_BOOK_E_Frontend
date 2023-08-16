import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UploadBookCard from "./UploadBookCard";
import styles from "./UploadedBooksCardUser.module.css";
const UploadedBooksCardUser = () => {
  const navigate = useNavigate();

  const onFrameLinkClick = useCallback(() => {
    navigate("/book-details");
  }, [navigate]);

  const onADDBOOKSBUTTONClick = useCallback(() => {
    navigate("/add-book");
  }, [navigate]);

  const onMyOrderButtonClick = useCallback(() => {
    navigate("/my-orders");
  }, [navigate]);

  const onOrderedButtonClick = useCallback(() => {
    navigate("/received-order-page");
  }, [navigate]);

  return (
    <div className={styles.uploadedBooks} id="uploaded_books">
      <h1 className={styles.uploadedBooks1}>Uploaded Books</h1>
      <UploadBookCard
        rectangle1="/rectangle-112@2x.png"
        frame="/frame7.svg"
        rectangle11="/rectangle-113@2x.png"
        frame1="/frame7.svg"
        rectangle12="/rectangle-114@2x.png"
        frame2="/frame7.svg"
        rectangle13="/rectangle-115@2x.png"
        frame3="/frame7.svg"
        onFrameLinkClick={onFrameLinkClick}
        onFrameLink1Click={onFrameLinkClick}
        onFrameLink2Click={onFrameLinkClick}
        onFrameLink3Click={onFrameLinkClick}
      />
      <button className={styles.addBooksButton} onClick={onADDBOOKSBUTTONClick}>
        <div className={styles.addBooks}>ADD BOOKS</div>
      </button>
      <button className={styles.myOrderButton} onClick={onMyOrderButtonClick}>
        <div className={styles.addBooks}>MY ORDER</div>
      </button>
      <button className={styles.orderedButton} onClick={onOrderedButtonClick}>
        <div className={styles.addBooks}>ORDERD BOOKS</div>
      </button>
    </div>
  );
};

export default UploadedBooksCardUser;
