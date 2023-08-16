import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UploaderCard from "../components/UploaderCard";
import BookTypConfPr from "../components/BookTypConfPr";
import styles from "./BookDetails.module.css";
const BookDetails = () => {
  const navigate = useNavigate();

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
    <div className={styles.bookDetails}>
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
      <img className={styles.bgBlurBookDetIcon} alt="" src="/bg_blur3.svg" />
      <img className={styles.bookPicIcon} alt="" src="/book_img@2x.png" />
      <UploaderCard />
      <div className={styles.author}>
        <div className={styles.author1}>Author</div>
      </div>
      <h1 className={styles.title} id="book_title">
        Title
      </h1>
      <BookTypConfPr />
      <div className={styles.description} id="description">
        <div className={styles.genre} id="genre">
          <div className={styles.genre1}>Genre</div>
          <h2 className={styles.genre2} id="genre_val">
            #Genre
          </h2>
        </div>
        <p className={styles.descriptionBlaBla} id="book_description">
          description: bla bla bla bla bla bla bla bla bla description: bla bla
          bla bla bla bla bla bla bladescription: bla bla bla bla bla bla bla
          bla bla description: bla bla bla bla bla bla bla bla bla description:
          bla bla bla bla bla bla bla bla bla description: bla bla bla bla bla
          bla bla bla bla description: bla bla bla bla bla bla bla bla bla
          description: bla bla bla bla bla bla bla bla bla description: bla bla
          bla bla bla bla bla bla bladescription: bla bla bla bla bla bla bla
          bla bla description: bla bla bla bla bla bla bla bla bla description:
          bla bla bla bla bla bla bla bla bla description: bla bla bla bla bla
          bla bla bla bla description: bla bla bla bla bla bla bla bla
          bladescription: bla bla bla bla bla bla bla bla bla description: bla
          bla bla bla bla bla bla bla bladescription: bla bla bla bla bla bla
          bla bla bla description: bla bla bla bla bla bla bla bla bla
          description: bla bla bla bla bla bla bla bla bla description: bla bla
          bla bla bla bla bla bla bla description: bla bla bla bla bla bla bla
          bla bla
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
