import { useCallback, useEffect, useState  } from "react";
import BookForm from "./BookForm";
import styles from "./UploadBookCard.module.css";
import { useNavigate } from "react-router-dom";
import { api } from '../services/api';
const UploadBookCard = ({
  rectangle1,
  frame,
  rectangle11,
  frame1,
  rectangle12,
  frame2,
  rectangle13,
  frame3,
  rectangle14,
  frame4,
  onFrameLinkClick,
}) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState({});
  const booksPerPage = 4;
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch user profile
        const profileResponse = await api.get("/api/user/profile"); // Replace with your API endpoint
        const profileData = profileResponse.data;
        setUser(profileData);

        // Fetch user's books
        const booksResponse = await api.get(`/api/book/userbooks/${profileData.user_id}`); // Replace with your API endpoint
        const booksData = booksResponse.data;
        if (Array.isArray(booksData)) {
          setBooks(booksData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);
  const totalPages = Math.ceil(books.length / booksPerPage);
  console.log(books)
  return (
    <div>
    <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={
              currentPage === index + 1
                ? styles.currentPageButton
                : styles.pageButton
            }
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className={styles.frame} id="book_section">
        {books
        .slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage)
        .map((book,i) => (
            <BookForm
              book={book}
              key={book.book_id}
              imageDimensions="/rectangle-15@2x.png"
              carImageDimensions={book.image}
              imageDimensionsString="/frame2.svg"
              propLeft={`${i*270}px`}
              propTop="10px"
              onFrameLinkClick={onFrameLinkClick}
            >
            </BookForm>     
          ))}
      </div>
    </div>
    
  );
};

export default UploadBookCard;
