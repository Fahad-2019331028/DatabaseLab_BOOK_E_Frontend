import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UploaderprofilePage.css";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UploaderprofilePage = () => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState({});
  const [rating, setRating] = useState("");
  const [ratings, setRatings] = useState([]); // State to hold the user's rating
  const [reviews, setReviews] = useState([]); // State to hold the review text
  const [review, setReview] = useState("")
  const booksPerPage = 4;
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch user profile
        const profileResponse = await api.get(`/api/user/uploader-profile/${user_id}`); // Replace with your API endpoint
        const profileData = profileResponse.data;
        setUser(profileData);

        // Fetch user's books
        const booksResponse = await api.get(`/api/book/userbooks/${profileData.user_id}`); // Replace with your API endpoint
        const booksData = booksResponse.data;
        if (Array.isArray(booksData)) {
          setBooks(booksData);
        }
        // Fetch user's rating (if available)
        const ratingResponse = await api.get(`/api/rating/ratings/${user_id}`);
        const ratingData = ratingResponse.data;
        console.log(ratingData);
        if (ratingData) {
          setRatings(ratingData);
        }
        const reviewsResponse = await api.get(`/api/review/reviews/${user_id}`);
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
  const onViewbookLinkClick = useCallback((book_id) => {
    navigate(`/bookdetail-page/${book_id}`);
  }, [navigate]);

  const onReviewerProfileClick = (reviewer_id) => {
    console.log("Clicked on reviewer's profile:", reviewer_id);
    window.location.href = `/uploaderprofile-page/${reviewer_id}`;
  };
  
  
  const onSubBttnClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='reviewSec']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  const handleRatingSubmit = async () => {
    try {
      console.log("Submitting Rating");
      await api.post(`/api/rating/add-rating/${user_id}`, {
        rating: rating,
        recipient_id: user_id,
      });
      toast.success("Rating submitted successfully!");
    } catch (error) {
      toast.error("You haven't done any transaction with this User")
      console.error("Error submitting rating:", error);
    }
  };
  const handleReviewSubmit = async () => {
    try {
      console.log("Submitting Review");
      await api.post(`/api/review/add-review/${user_id}`, {
        review: review,
        recipient_id: user_id,
      });
      toast.success("Review submitted successfully!");
    } catch (error) {
      toast.error("You haven't done any transaction with this User")
      console.error("Error submitting review:", error);
    }
  };
  const onIconContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onHomePageClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onProfileClick = useCallback(() => {
    navigate("/userprofile-page");
  }, [navigate]);

  const onLogoutContainerClick = useCallback(() => {
    localStorage.removeItem("token");
    toast.success("User logged out")
    navigate("/login-page");
  }, [navigate]);
  console.log(ratings)
  console.log(reviews)
  return (
    <div className="uploaderprofile-page">
      <img
        className="pic-left-align-icon3"
        alt=""
        src="/pic-leftalign1@2x.png"
      />
      <main className="body9">
        <div className="info1">
          <img
            className="uploader-pic-icon1"
            alt=""
            src={user.profiile_picture}
          />
          <div className="name7">{user.name}</div>
          <div className="just-info1">
            <div className="rat1">
              {ratings?.averageRating > 1 && 
                <div className="rating2">
                  &#9733; {ratings?.averageRating} {" "} ({ratings.ratingCount})
                </div>}
              <div className="rating3">Rating</div>
            </div>
            <div className="email12">
              <div className="rating3">Email</div>
              <div className="rating2">{user.email}</div>
            </div>
            <div className="email12">
              <div className="rating3">Address</div>
              <div className="rating2">{user.address}</div>
            </div>
            <div className="email12">
              <div className="rating3">Phone</div>
              <div className="rating2">{user.phone_number}</div>
            </div>
          </div>
        </div>
        <div className="uploadedbook-sec1">
          <h1 className="uploaded-books1">Uploaded Books</h1>
          <div className="book-sec4">
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
        </div>
        <div className="review-sec1">
          <h1 className="reviews1">Reviews</h1>
          {reviews.map((review) => (
            <div className="rev3" key={review.review_id}>
              <a className="user3" onClick={() => onReviewerProfileClick(review.reviewer_id)}>
                      {review.Reviewer.username}
                    </a>
              <p className="reviewText">{review.review}</p>
            </div>
          ))}
        </div>
          
        <div className="leave-rev">
          <h1 className="leav">Leave A Review</h1>
          <form className="rev-form">
    <div>
      <div className="rating8">Rating</div>
      <input
        className="rating8"
        type="number"
        placeholder="Rating 0 to 10"
        min={0}
        max={10}
        required
        id="rating"
        value={rating}
        onChange={handleRatingChange}
      />
      <button className="sub-bttn" onClick={handleRatingSubmit}>
        <div className="submit">Submit Rating</div>
      </button>
    </div>
    <textarea
      className="review"
      placeholder="Tell Us your Experience With this user"
      value={review}
      onChange={(event) => setReview(event.target.value)}
      required
      id="review"
    />
    <button className="sub-bttn" onClick={handleReviewSubmit}>
      <div className="submit">Submit Review</div>
    </button>
  </form>
        </div>
      </main>
      <header className="navbar9">
        <div className="icon9" onClick={onIconContainerClick}>
          <div className="book-e12">Book-E</div>
          <img className="book-e-icon9" alt="" src="/bookeicon.svg" />
        </div>
        <div className="nav-bttn6">
          <button className="home-page7" onClick={onHomePageClick}>
            Home Page
          </button>
          <button className="profile12" onClick={onProfileClick}>
            <img className="pr-icon6" alt="" src="/pr-icon.svg" />
            <button className="home-page7">Profile</button>
          </button>
          <div className="logout6" onClick={onLogoutContainerClick}>
            <button className="log-out6">Log Out</button>
            <img className="logout-icon6" alt="" src="/logout-icon.svg" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default UploaderprofilePage;
