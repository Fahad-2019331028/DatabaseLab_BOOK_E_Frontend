import { useCallback, useEffect, useState  } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import FilterButton from "../components/FilterButton";
import BookForm from "../components/BookForm";
import styles from "./HomePage.module.css";
import { api } from '../services/api';
// import { Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    sort: "",
    genre: "",
    bookType: "",
  });
  useEffect(() => {
    // Fetch books from API and set them in the state
    const fetchBooks = async () => {
      try {
        const response = await api.get("/api/book/allbooks"); // Use Axios for the API request
        const data = response.data;
        setBooks(data.books);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);
  
  const applyFilters = (selectedFilters) => {
    const { sort, genre, bookType } = selectedFilters;

    // Send the API request with the selected filters
    api.get(`/api/book/filter?sort=${sort}&genre=${genre}&bookType=${bookType}`)
      .then(response => {
        const filteredBooksData = response.data;
        setFilteredBooks(filteredBooksData); // Update the filtered books in HomePage
      })
      .catch(error => {
        console.error(error);
      });
  };


  const onSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const onSearchSubmit = async () => {
    try {
      const response = await api.get(`/api/book/search?searchQuery=${searchQuery}`);
      const searchResults = response.data;
      setBooks(searchResults);
    } catch (error) {
      console.error(error);
    }
  };
  const onFrameLinkClick = useCallback(() => {
    navigate("/book-details");
  }, [navigate]);

  const onBOOKETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/user-profile");
  }, [navigate]);

  const onLogOutClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // const onFilterButtonClick = useCallback(() => {
  //   // Open the filter popup or apply filters directly
  //   // You can implement the logic as per your design
  //   // For example, you can set state to open a modal or directly call applyFilters here
  //   applyFilters(filters);
  // }, [filters]);

  // const onFluentarrowImport24FilledClick = useCallback(() => {
  //   const anchor = document.querySelector("[data-scroll-to='bookSection']");
  //   if (anchor) {
  //     anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  //   }
  // }, []);
  const totalPages = Math.ceil(books.length / booksPerPage);
  console.log(books)
  return (
    <div className={styles.homePage}>
      <nav className={styles.navbar} id="navbar" navbar={true}>
        <div className={styles.icon}>
          <img className={styles.phbookThinIcon} alt="" src="/phbookthin.svg" />
          <div className={styles.bookE} onClick={onBOOKETextClick}>
            BOOK-E
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.homePage1}>Home Page</button>
          <div className={styles.aboutUs}>About Us</div>
          <button className={styles.profile} onClick={onProfileClick}>
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
            <button className={styles.homePage1}>Profile</button>
          </button>
          <div className={styles.logout}>
            <button className={styles.logOut} onClick={onLogOutClick}>
              Log Out
            </button>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </div>
      </nav>
      <img className={styles.bgRestIcon} alt="" src="/bg_blur.svg" />
      <InputGroup className={styles.search} width="158px" w="258px">
      <InputLeftElement
        pointerEvents="none"
        children={<ArrowBackIcon color="gray.300" />}
      />
      <Input
        variant="outline"
        textColor="#fff"
        backgroundColor="#1df659"
        borderColor="#222a36"
        focusBorderColor="#1df659"
        placeholder="Search Here"
        value={searchQuery}
        onChange={onSearchChange}
      />
      <button className={styles.searchButton} onClick={onSearchSubmit}>
        Search
      </button>
    </InputGroup>
      <FilterButton applyFilters={applyFilters} selectedFilters={filters}/>
      {/* Pagination */}
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
      <div className={styles.bookSection} id="book_section">
        {(filteredBooks.length > 0 ? filteredBooks : books)
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

export default HomePage;
