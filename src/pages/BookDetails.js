import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import UploaderCard from "../components/UploaderCard";
import BookTypConfPr from "../components/BookTypConfPr";
import styles from "./BookDetails.module.css";
import { api } from '../services/api'; // Assuming you have an API service
import { useParams } from "react-router-dom";
const BookDetails = () => {
  const navigate = useNavigate();
  const { book_id } = useParams();
  console.log("Book ID:", book_id);

  const [book, setBook] = useState(null);
  const [owner, setOwner] = useState(null);
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

  useEffect(() => {
    // Fetch book by book_id
    const fetchBook = async () => {
      try {
        const response = await api.get(`/api/book/book/${book_id}`);
        setBook(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    // Fetch owner by book_id
    const fetchOwner = async () => {
      try {
        const response = await api.get(`/api/book/uploader-profile/${book_id}`);
        setOwner(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBook();
    fetchOwner();
  }, [book_id]);
  console.log(book)
  console.log(owner)
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
      
      {/* Check if book is null before accessing its properties */}
      {book && owner ? (
        <>
          {/* Render the components using book data */}
          <UploaderCard owner={owner} />
          <div className={styles.author}>
            <div className={styles.author1}>by {book.author}</div>
          </div>
          <h1 className={styles.title} id="book_title">
            {book.title}
          </h1>
          <BookTypConfPr book={book} />
          <div className={styles.description} id="description">
            <div className={styles.genre} id="genre">
              <div className={styles.genre1}>Genre:</div>
              <h2 className={styles.genre2} id="genre_val">
                {book.genre}
              </h2>
            </div>
            <p className={styles.descriptionBlaBla} id="book_description">
              {book.description}
            </p>
          </div>
        </>
      ) : (
        // Render loading or placeholder content while book data is being fetched
        <p>Loading...</p>
      )}
      </div>
  );
};

export default BookDetails;
