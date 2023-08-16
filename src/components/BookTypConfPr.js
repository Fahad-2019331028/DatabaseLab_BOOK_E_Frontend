import styles from "./BookTypConfPr.module.css";
const BookTypConfPr = ({book}) => {
  return (
    <div className={styles.conditon} id="extra">
      <section className={styles.bookType} id="book_type">
        <div className={styles.bookType1}>Book Type :</div>
        <h2 className={styles.bookType2} id="book_type_val">
          {book.is_for_sale ? "Sale": (book.is_for_loan ? "Loan" : "Giveaway")}
        </h2>
      </section>
      <section className={styles.condition} id="book_type">
        <div className={styles.bookType1}>Conditon</div>
        <h2 className={styles.condition1} id="book_type_val">
          {book.book_condition}
        </h2>
      </section>
      <div className={styles.price}>
        <h2 className={styles.price1} id="price_val">
        {book.price ? `$ ${book.price}`: "N/A"} 
        </h2>
        <div className={styles.price2}>Price:</div>
      </div>
      <button className={styles.confirmButton}>
        <div className={styles.confirmOrder}>Confirm order</div>
      </button>
    </div>
  );
};

export default BookTypConfPr;
