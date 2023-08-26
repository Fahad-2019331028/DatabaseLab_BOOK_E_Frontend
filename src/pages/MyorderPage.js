import { useState,useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import "./MyorderPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyorderPage = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  // const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage=4;
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const fetchOrdersAndBooks = async () => {
      try {
        const response = await api.get("/api/order/user-orders");
        const fetchedOrders = response.data;
        
        // Fetch book information for each order
        const ordersWithBooks = await Promise.all(
          fetchedOrders.map(async (order) => {
            try {
              const bookResponse = await api.get(`/api/book/book/${order.Book.book_id}`);
              const book = bookResponse.data;
              return { ...order, book };
            } catch (error) {
              console.error(error);
              return order;
            }
          })
        );

        setOrders(ordersWithBooks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrdersAndBooks();
  }, []);

  const onViewbookLinkClick = useCallback((book_id) => {
    navigate(`/bookdetail-page/${book_id}`);
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
  const totalPages = Math.ceil(orders.length / booksPerPage);
  return (
    <div className="myorder-page">
      <main className="body5">
        <h1 className="my-orders">My Orders</h1>
        <div className="book-sec2">
          {orders
          .slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage)
          .map((order) => (
          <div className="book12">
            <img className="book-pic-icon12" alt="" src={order.book.book_img_url}/>
            <h2 className="title12">{order.book.title}</h2>
            <h4 className="author12">{order.book.author}</h4>
            <div className="gnre12">
              <div className="genre24">Genre</div>
              <div className="genre25">{order.book.genre}</div>
            </div>
            <div className="gnre12">
              <div className="condition37">Condition</div>
              <div className="condition38">{order.book.book_condition}</div>
            </div>
            <div className="gnre12">
              <div className="condition37">Book Type</div>
              <div className="condition38">{order.book.price?order.book.price:order.book.is_for_loan?"Loan":"Giveaway"}</div>
            </div>
            <div className="status6">
              <div className="order-status12">{`Order Status `}</div>
              <div className="order-status13">{order.is_confirmed === 1
                    ? "Confirmed"
                    : order.is_confirmed === 2
                    ? "Discarded"
                    : "Pending"}</div>
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
      <header className="navbar5">
        <div className="icon5" onClick={onIconContainerClick}>
          <div className="book-e8">Book-E</div>
          <img className="book-e-icon5" alt="" src="/bookeicon.svg" />
        </div>
        <div className="nav-bttn2">
          <button className="home-page3" onClick={onHomePageClick}>
            Home Page
          </button>
          <button className="profile4" onClick={onProfileClick}>
            <img className="pr-icon2" alt="" src="/pr-icon.svg" />
            <button className="home-page3">Profile</button>
          </button>
          <div className="logout2" onClick={onLogoutContainerClick}>
            <button className="log-out2">Log Out</button>
            <img className="logout-icon2" alt="" src="/logout-icon.svg" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MyorderPage;
