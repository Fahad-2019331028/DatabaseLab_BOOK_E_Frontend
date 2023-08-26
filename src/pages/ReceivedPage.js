import { useState,useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {toast} from "react-toastify"
import "./ReceivedPage.css";
const ReceivedPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  // const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage=3;
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchOrdersAndBooks = async () => {
    try {
      const response = await api.get("/api/order/received-orders");
      const fetchedOrdersObject = response.data;
      
      // Access the 'receivedOrders' array from the fetchedOrdersObject
      const fetchedOrders = fetchedOrdersObject.receivedOrders;
  
      // Fetch book information and user information for each order
      const ordersWithBooksAndUsers = await Promise.all(
        fetchedOrders.map(async (order) => {
          try {
            const bookResponse = await api.get(`/api/book/book/${order.book_id}`);
            const book = bookResponse.data;
  
            // Fetch user information using the buyer_id
            const userResponse = await api.get(`/api/user/uploader-profile/${order.buyer_id}`);
            const user = userResponse.data;
  
            return { ...order, book, user };
          } catch (error) {
            console.error(error);
            return order;
          }
        })
      );
  
      setOrders([...ordersWithBooksAndUsers]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrdersAndBooks();
  }, []);
  const confirmOrder = async (order_id) => {
    try {
      await api.post(`/api/order/confirm-order/${order_id}`);
      toast.success("Order confirmed")
      fetchOrdersAndBooks()
      // window.location.reload(); // Refresh the page after confirming
    } catch (error) {
      toast.error("Couldn't confirm")
      console.error(error);
    }
  };
  
  const discardOrder = async (order_id) => {
    try {
      await api.post(`/api/order/discard-order/${order_id}`);
      toast.success("Order discarded")
      fetchOrdersAndBooks()
      // window.location.reload(); // Refresh the page after discarding
    } catch (error) {
      toast.error("Couldn't discard")
      console.error(error);
    }
  };
  
  const onViewbookLinkClick = useCallback((book_id) => {
    navigate(`/bookdetail-page/${book_id}`);
  }, [navigate]);
  const onOrderByClick = useCallback((user_id) => {
    navigate(`/uploaderprofile-page/${user_id}`);
  }, [navigate]);


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
  orders.map((order)=> (
    console.log(order.book)
  ))
  orders.map((order)=> (
    console.log(order.user)
  ))
  const totalPages = Math.ceil(orders.length / booksPerPage);
  return (
    <div className="received-page">
      <main className="body4">
        <h1 className="received-orders">Received Orders</h1>
        <div className="book-sec1">
        {orders
          .slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage)
          .map((order) => (
          <div className="order">
            <div className="order-section">
              <div className="order-by">Ordered By</div>
              <a className="order-by1" onClick={() => onOrderByClick(order.user.user_id)}>
                {order.user.username}
              </a>
              <button className="confirm-bttn" onClick={() => confirmOrder(order.order_id)}>
                <div className="confirm">Confirm</div>
              </button>
              <button className="discart-bttn" onClick={() => discardOrder(order.order_id)}>
                <div className="confirm">Discard</div>
              </button>

            </div>
            <div className="book6">
              <img className="book-pic-icon6" alt="" src={order.book.book_img_url} />
              <h2 className="title6">{order.book.title}</h2>
              <h4 className="author6">{order.book.author}</h4>
              <div className="gnre6">
                <div className="genre12">Genre</div>
                <div className="genre13">{order.book.genre}</div>
              </div>
              <div className="gnre6">
                <div className="condition19">Condition</div>
                <div className="condition20">{order.book.book_condition}</div>
              </div>
              <div className="gnre6">
                <div className="condition19">Book Type</div>
                <div className="condition20">{order.book.price?order.book.price:order.book.is_for_loan?"Loan":"Giveaway"}</div>
              </div>
              <div className="status">
                <div className="order-status">{`Order Status `}</div>
                <div className="order-status1">
                  {order.is_confirmed === 1
                    ? "Confirmed"
                    : order.is_confirmed === 2
                    ? "Discarded"
                    : "Pending"}
                </div>
              </div>
              <a
                  className="viewbook-link"
                  onClick={() => onViewbookLinkClick(order.book.book_id)}
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
      </main>
      <header className="navbar4">
        <div className="icon4" onClick={onIconContainerClick}>
          <div className="book-e7">Book-E</div>
          <img className="book-e-icon4" alt="" src="/bookeicon.svg" />
        </div>
        <div className="nav-bttn1">
          <button className="home-page2" onClick={onHomePageClick}>
            Home Page
          </button>
          <button className="profile2" onClick={onProfileClick}>
            <img className="pr-icon1" alt="" src="/pr-icon.svg" />
            <button className="home-page2">Profile</button>
          </button>
          <div className="logout1" onClick={onLogoutContainerClick}>
            <button className="log-out1">Log Out</button>
            <img className="logout-icon1" alt="" src="/logout-icon.svg" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default ReceivedPage;
