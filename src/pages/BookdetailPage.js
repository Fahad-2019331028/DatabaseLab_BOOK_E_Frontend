import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useParams } from "react-router-dom";
import "./BookdetailPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookdetailPage = () => {
  const navigate = useNavigate();
  const { book_id } = useParams();
  console.log("Book ID:", book_id);

  const [book, setBook] = useState();
  const [owner, setOwner] = useState();
  const handleConfirmOrder = async () => {
    try {
      // Send the book_id to the backend to place the order
      const response = await api.post("api/order/place-order", { book_id: book.book_id });
      console.log(response)
      if (response.status === 200 && response.data.order) {
        toast("Order Placed. Now Fuck Off")
        console.log(response.data.message);
        // You can perform any additional actions here, such as showing a success message or navigating to a new page
      }
      else
      {
        toast("Order already placed")
      }
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };
  const onUpoladedBYClick = useCallback(() => {
    navigate(`/uploaderprofile-page/${owner.user_id}`); // Pass user_id as a parameter
  }, [navigate, owner]);

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
    navigate("/login-page");
  }, [navigate]);

    console.log(book_id)
    console.log("Fetching book")
    useEffect(() => {
      const fetchBookAndOwner = async () => {
        try {
          const [bookResponse, ownerResponse] = await Promise.all([
            api.get(`/api/book/book/${book_id}`),
            api.get(`/api/book/uploader-profile/${book_id}`)
          ]);
  
          setBook(bookResponse.data);
          setOwner(ownerResponse.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchBookAndOwner();
    }, [book_id]);
    // fetchOwner();
  console.log(book)
  console.log(owner)
  if (!book) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bookdetail-page">
      <ToastContainer/>
      <img
        className="pic-left-align-icon4"
        alt=""
        src="/pic-leftalign@2x.png"
      />
      <main className="body10">
        <div className="bookdet-sec">
          <button className="confirm-bttn6" onClick={handleConfirmOrder}>
            <div className="confirm6">Order</div>
          </button>
          <h1 className="tittle">{book.title}</h1>
          <h2 className="author28">{book.author}</h2>
          <img className="book-pic-icon26" alt="" src={book.book_img_url} />
          <div className="genr">
            <div className="genre55">Genre</div>
            <div className="genre56">{book.genre}</div>
          </div>
          <div className="des">
            <div className="conditon">Description</div>
            <p className="baaal-shobbaal-baal-container">
            {book.description}
            </p>
          </div>
          <div className="con">
            <div className="conditon">Conditon</div>
            <div className="conditon1">{book.book_condition}</div>
          </div>
          <div className="booktp">
            <div className="conditon">Book Type</div>
            <div className="conditon1">{book.price ? `$ ${book.price}`: (book.is_for_loan ? "Loan" : "Giveaway")}</div>
          </div>
          <div className="prc">
            <div className="conditon">Price</div>
            <div className="conditon1">{book.price?book.price:"N/A"}</div>
          </div>
          <div className="up">
            <div className="conditon">Upoladed BY</div>
            <a className="upoladed-by1" onClick={onUpoladedBYClick}>
              {owner.username}
            </a>
          </div>
        </div>
      </main>
      <header className="navbar10">
        <div className="icon10" onClick={onIconContainerClick}>
          <div className="book-e13">Book-E</div>
          <img className="book-e-icon10" alt="" src="/bookeicon.svg" />
        </div>
        <div className="nav-bttn7">
          <button className="home-page8" onClick={onHomePageClick}>
            Home Page
          </button>
          <button className="profile14" onClick={onProfileClick}>
            <img className="pr-icon7" alt="" src="/pr-icon.svg" />
            <button className="home-page8">Profile</button>
          </button>
          <div className="logout7" onClick={onLogoutContainerClick}>
            <button className="log-out7">Log Out</button>
            <img className="logout-icon7" alt="" src="/logout-icon.svg" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default BookdetailPage;
