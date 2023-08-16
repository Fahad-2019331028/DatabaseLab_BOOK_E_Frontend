import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UploadBookCard from "./UploadBookCard";
import styles from "./UploadedBooksCardUploader.module.css";
const UploadedBooksCardUploader = () => {
  const navigate = useNavigate();

  const onFrameLinkClick = useCallback(() => {
    navigate("/book-details");
  }, [navigate]);

  const onFluentarrowImport24FilledClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frame']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.uploadedBooks} id="uploaded_books">
      <h1 className={styles.uploadedBooks1}>Uploaded Books</h1>
      <UploadBookCard
        rectangle1="/rectangle-18@2x.png"
        frame="/frame5.svg"
        rectangle11="/rectangle-19@2x.png"
        frame1="/frame5.svg"
        rectangle12="/rectangle-110@2x.png"
        frame2="/frame6.svg"
        rectangle13="/rectangle-111@2x.png"
        frame3="/frame6.svg"
        rectangle14="/rectangle-112@2x.png"
        frame4="/frame7.svg"
        
        onFrameLinkClick={onFrameLinkClick}
        onFrameLink1Click={onFrameLinkClick}
        onFrameLink2Click={onFrameLinkClick}
        onFrameLink3Click={onFrameLinkClick}
        onFrameLink4Click={onFrameLinkClick}
      />
      <button
        className={styles.fluentarrowImport24Filled}
        onClick={onFluentarrowImport24FilledClick}
      >
        <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
      </button>
    </div>
  );
};

export default UploadedBooksCardUploader;
