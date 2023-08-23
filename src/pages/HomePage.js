import { useState,useEffect, useCallback } from "react";
import FilterBy from "../components/FilterBy";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./HomePage.css";
const HomePage = () => {
  const [isFilterByPopupOpen, setFilterByPopupOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const booksPerPage = 4;
  const navigate = useNavigate();
  const fetchBooks = useCallback(async () => {
    try {
      const response = await api.get("/api/book/allbooks"); // Use Axios for the API request
        const data = response.data;
        setBooks(data.books);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching books");
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  const onViewbookLinkClick = useCallback((book_id) => {
    navigate(`/bookdetail-page/${book_id}`);
  }, [navigate]);
  const onSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const onSearchSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.get(`/api/book/search?searchQuery=${searchQuery}`);
      const searchResults = response.data;
      setBooks(searchResults);
    } catch (error) {
      console.error(error);
    }
  };
  const handleApplyFilter = useCallback(
    async (selectedFilters) => {
      try {
        setFilters(selectedFilters);
        const response = await api.get("/api/book/filter", {
          params: selectedFilters,
        });
        const filteredBooks = response.data;
        setBooks(filteredBooks);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );
  // const onViewbookLink1Click = useCallback(() => {
  //   navigate("/bookdetail-page");
  // }, [navigate]);

  // const onViewbookLink2Click = useCallback(() => {
  //   navigate("/bookdetail-page");
  // }, [navigate]);

  // const onViewbookLink3Click = useCallback(() => {
  //   navigate("/bookdetail-page");
  // }, [navigate]);

  // const onViewbookLink4Click = useCallback(() => {
  //   navigate("/bookdetail-page");
  // }, [navigate]);

  // const onViewbookLink5Click = useCallback(() => {
  //   navigate("/bookdetail-page");
  // }, [navigate]);

  const openFilterByPopup = useCallback(() => {
    setFilterByPopupOpen(true);
  }, []);

  const closeFilterByPopup = useCallback(() => {
    setFilterByPopupOpen(false);
  }, []);

  const onProfileClick = useCallback(() => {
    navigate("/userprofile-page");
  }, [navigate]);

  const onLogoutContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(books.length / booksPerPage);
  console.log(books)
  return (
    <>
      <div className="home-page">
        <main className="body1">
          <h4 className="for-you">For You..</h4>
          <h1 className="available-books">Available BOOKS</h1>
          
          <div className="book-sec">
          {books
          .slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage)
          .map((book) => (
              <div className="book" key={book.book_id}>
                <img className="book-pic-icon" alt="" src={book.book_img_url} />
                <h2 className="title">{book.title}</h2>
                <h4 className="author">{book.author}</h4>
                <div className="gnre">
                  <div className="genre">Genre</div>
                  <div className="genre1">{book.genre}</div>
                </div>
                <div className="gnre">
                  <div className="book-type">Condition</div>
                  <div className="condition2">{book.book_condition}</div>
                </div>
              <div className="gnre">
                <div className="book-type">Book Type</div>
                <div className="condition2">{book.price ? `$ ${book.price}`: (book.is_for_loan ? "Loan" : "Giveaway")}</div>
              </div>
              <a
                  className="viewbook-link"
                  onClick={() => onViewbookLinkClick(book.book_id)}
                >
                  <div className="frame">
                    <div className="frame-child" />
                    <div className="frame-wrapper">
                      <img className="frame-icon" alt="" src="/frame.svg" />
                    </div>
                  </div>
                  <div className="view-book">View Book.......</div>
                </a>
              </div>
              ))}
              <div className="pagination">
              {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={
                  currentPage === index + 1 ? "currentPageButton" : "pageButton"
                }
                onClick={() => onPageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            </div>
          </div>
          
       
          

          <form className="search" onClick={onSearchSubmit}>
            
            <input
              className="search-here"
              type="text"
              placeholder="Search Here"
              id="search"
              value={searchQuery}
              onChange={onSearchChange}
            />
            <button className="search-bttn" >
              <div className="search1">Search</div>
              <div className="search-bttn-child" />
            </button>
          </form>
          <button className="filter-bttn" onClick={openFilterByPopup}>
            <div className="filter-by1">Filter By</div>
            <div className="filter-bttn-child" />
          </button>
          <ToastContainer /> {/* React Toastify container */}
        </main>
        <header className="navbar1">
          <div className="icon1">
            <div className="book-e2">Book-E</div>
            <img className="book-e-icon1" alt="" src="/bookeicon.svg" />
          </div>
          <div className="nav-bttn">
            <button className="home-page1">Home Page</button>
            <button className="profile" onClick={onProfileClick}>
              <img className="pr-icon" alt="" src="/pr-icon.svg" />
              <button className="home-page1">Profile</button>
            </button>
            <div className="logout" onClick={onLogoutContainerClick}>
              <button className="log-out">Log Out</button>
              <img className="logout-icon" alt="" src="/logout-icon.svg" />
            </div>
          </div>
        </header>
      </div>
      {isFilterByPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilterByPopup}
        >
          <FilterBy onClose={closeFilterByPopup} onApplyFilter={handleApplyFilter} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomePage;
