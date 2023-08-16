import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookAddForm.module.css";
const BookAddForm = () => {
  const navigate = useNavigate();

  const onAddButtonClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  return (
    <div className={styles.bookInfo}>
      <div className={styles.frame}>
        <form className={styles.bookInfo1} method="post" id="add_book_form">
          <input className={styles.uppPic} type="file" required />
          <button className={styles.addButton} onClick={onAddButtonClick}>
            <div className={styles.addBook}>ADD BOOK</div>
          </button>
          <div className={styles.price}>
            <div className={styles.genre}>Price</div>
            <input
              className={styles.email}
              type="text"
              placeholder="NULL if not for sale"
              id="book_price"
            />
          </div>
          <div className={styles.bookType}>
            <div className={styles.genre}>Book Type</div>
            <input
              className={styles.email}
              type="text"
              placeholder="Type"
              id="book_type"
            />
          </div>
          <div className={styles.condition}>
            <div className={styles.genre}>Condition</div>
            <input
              className={styles.email}
              type="text"
              placeholder="Condition of the book"
              required
              id="book_condition"
            />
          </div>
          <div className={styles.nameGenre}>
            <div className={styles.genre}>Genre</div>
            <input
              className={styles.email}
              type="text"
              placeholder="Genre"
              id="book_genre"
            />
          </div>
          <div className={styles.nameAuthor}>
            <div className={styles.genre}>Name Of Author:</div>
            <input
              className={styles.email}
              type="text"
              placeholder="Author"
              required
              id="author_name"
            />
          </div>
          <div className={styles.nameBook}>
            <div className={styles.genre}>Name Of the Book:</div>
            <input
              className={styles.email}
              type="text"
              placeholder="Title"
              required
              id="book_title"
            />
          </div>
        </form>
      </div>
      <div className={styles.frame1}>
        <img className={styles.bookPicIcon} alt="" src="/rectangle-72@2x.png" />
      </div>
    </div>
  );
};

export default BookAddForm;
