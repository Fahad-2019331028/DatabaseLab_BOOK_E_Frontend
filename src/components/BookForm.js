import { useMemo } from "react";
import { Link } from "react-router-dom";
import Book1 from "./Book1";
import styles from "./BookForm.module.css";
const BookForm = ({
  book,
  imageDimensions,
  carImageDimensions,
  imageDimensionsString,
  propLeft,
  propTop,
  onFrameLinkClick,
}) => {
  const book11Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={styles.book1} style={book11Style}>
      <Book1
        book={book}
        rectangle1="/rectangle-1@2x.png"
        rectangle5="/rectangle-5@2x.png"
        frame="/frame1.svg"
        book1Width="unset"
        book1AlignSelf="stretch"
        book1FlexShrink="0"
        onFrameLinkClick={onFrameLinkClick}
      />
    </div>
  );
};

export default BookForm;
