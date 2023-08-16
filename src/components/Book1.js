import { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./Book1.module.css";
const Book1 = ({
  book,
  rectangle1,
  rectangle5,
  frame,
  book1Width,
  book1AlignSelf,
  book1FlexShrink,
  onFrameLinkClick,
}) => {
  const book1Style = useMemo(() => {
    return {
      width: book1Width,
      alignSelf: book1AlignSelf,
      flexShrink: book1FlexShrink,
    };
  }, [book1Width, book1AlignSelf, book1FlexShrink]);

  return (
    <div className={styles.book1} style={book1Style}>
      <img className={styles.book1Child} alt="" src={rectangle1} />
      <div className={styles.bookType}>Book Type:</div>
      
      <h2 className={styles.bookType1} id="book_type">
       {book.price ? `$ ${book.price}`: (book.is_for_loan ? "Loan" : "Giveaway")} 
      </h2>
      <h2 className={styles.condition} id="book_condition">{book.book_condition}</h2>
      <div className={styles.condtion}>Condtion: </div>
      <h3 className={styles.genre} id="genre">
        Genre: {book.genre || "N/A"}
      </h3>
      <div><h2 className={styles.authorName} id="author_name">
        Author: {book.author}
      </h2>
      </div>
      <div>
      <h1 className={styles.title} id="tittle">
        Title: {book.title}
      </h1></div>
      <img className={styles.book1Item} alt="" src={rectangle5} />
      <Link
        className={styles.frameParent}
        key={book.book_id}
        to={`/book-details/${book.book_id}`}
        onClick={onFrameLinkClick}
      >
        <div className={styles.frame}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <img className={styles.frameIcon} alt="" src={frame} />
          </div>
        </div>
        <div className={styles.viewBook}>View Book.......</div>
      </Link>
    </div>
  );
};

export default Book1;
