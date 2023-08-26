import { useState,useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../services/api';
import "./UserprofilePage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserprofilePage = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState({});
  const [ratings, setRatings] = useState([]); // State to hold the user's rating
  const [reviews, setReviews] = useState([]); // State to hold the review text
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

        const ratingResponse = await api.get(`/api/rating/ratings/${profileData.user_id}`);
        const ratingData = ratingResponse.data;
        console.log(ratingData);
        if (ratingData) {
          setRatings(ratingData);
        }
        const reviewsResponse = await api.get(`/api/review/reviews/${profileData.user_id}`);
        const reviewsData = reviewsResponse.data;
        if (Array.isArray(reviewsData)) {
          setReviews(reviewsData); // Assuming you have a state variable for reviews
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);
  const totalPages = Math.ceil(books.length / booksPerPage);
  const onEditBttnClick = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);

  const onViewbookLinkClick = useCallback((book_id) => {
    navigate(`/bookdetail-page/${book_id}`);
  }, [navigate]);

  
  const onAddButtonClick = useCallback(() => {
    navigate("/add-book");
  }, [navigate]);

  const onMyorderButtonClick = useCallback(() => {
    navigate("/my-order");
  }, [navigate]);

  const onReceivedButtonClick = useCallback(() => {
    navigate("/received-order");
  }, [navigate]);

  const onUserClick = useCallback(() => {
    navigate("/uploaderprofile-page");
  }, [navigate]);


  const onIconContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onHomePageClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onLogoutContainerClick = useCallback(() => {
    localStorage.removeItem("token");
    toast.success("User logged out")
    navigate("/login-page");
  }, [navigate]);

  const onReviewerProfileClick = (reviewer_id) => {
    console.log("Clicked on reviewer's profile:", reviewer_id);
    navigate(`/uploaderprofile-page/${reviewer_id}`);
  };
  
  console.log(ratings)
  console.log(reviews)
  return (
    <div className="userprofile-page">
      <img
        className="pic-left-align-icon2"
        alt=""
        src="/pic-leftalign1@2x.png"
      />
      <main className="body8">
        <div className="info">
          <div className="name6">{user.name}</div>
          <div className="just-info">
            <div className="email9">
              <div className="email10">Email</div>
              <div className="rating">{user.email}</div>
            </div>
            <div className="email9">
              <div className="email10">Address</div>
              <div className="rating">{user.address}</div>
            </div>
            <div className="email9">
              <div className="email10">Phone</div>
              <div className="rating">{user.phone_number}</div>
            </div>
          </div>
          <div className="rat">
            <div className="rating">{ratings?.averageRating > 1 && 
                <div className="rating2">&#9733;{ratings?.averageRating}{""}({ratings.ratingCount})
                </div>}</div>
            <div className="email10">Rating</div>
          </div>
          <img
            className="uploader-pic-icon"
            alt=""
            src={user.profile_picture}
          />
          <button className="edit-bttn" onClick={onEditBttnClick}>
            <div className="edit">Edit</div>
          </button>
        </div>
        <div className="uploadedbook-sec">
          <h1 className="uploaded-books">Uploaded Books</h1>
          <div className="book-sec3">
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
          <div className="bttn1">
            <button className="add-button" onClick={onAddButtonClick}>
              <div className="t">Add Books</div>
            </button>
            <button className="add-button" onClick={onMyorderButtonClick}>
              <div className="t">My Orders</div>
            </button>
            <button className="received-button" onClick={onReceivedButtonClick}>
              <div className="t">Received Orders</div>
            </button>
          </div>
        </div>
        <div className="review-sec">
          <h1 className="reviews">Reviews</h1>
          {reviews.map((review) => (
            <div className="rev" key={review.id}>
              <a className="user" onClick={() => onReviewerProfileClick(review.reviewer_id)}>
                      {review.Reviewer.username}
                    </a>
              <p className="baal-baalbaal-baalbaal">{review.review}</p>
            </div>
          ))}
          
        </div>
      </main>
      <header className="navbar8">
        <div className="icon8" onClick={onIconContainerClick}>
          <div className="book-e11">Book-E</div>
          <img className="book-e-icon8" alt="" src="/bookeicon.svg" />
        </div>
        <div className="nav-bttn5">
          <button className="home-page6" onClick={onHomePageClick}>
            Home Page
          </button>
          <button className="profile10">
            <img className="pr-icon5" alt="" src="/pr-icon.svg" />
            <button className="home-page6">Profile</button>
          </button>
          <div className="logout5" onClick={onLogoutContainerClick}>
            <button className="log-out5">Log Out</button>
            <img className="logout-icon5" alt="" src="/logout-icon.svg" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserprofilePage;
