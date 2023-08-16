import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ReceivedOrderPage from "./pages/ReceivedOrderPage";
import MyOrders from "./pages/MyOrders";
import EditProfile from "./pages/EditProfile";
import AddBook from "./pages/AddBook";
import UserProfile from "./pages/UserProfile";
import UploaderProfile from "./pages/UploaderProfile";
import BookDetails from "./pages/BookDetails";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/received-order-page":
        title = "";
        metaDescription = "";
        break;
      case "/my-orders":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile":
        title = "";
        metaDescription = "";
        break;
      case "/add-book":
        title = "";
        metaDescription = "";
        break;
      case "/user-profile":
        title = "";
        metaDescription = "";
        break;
      case "/uploader-profile":
        title = "";
        metaDescription = "";
        break;
      case "/book-details":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/received-order-page" element={<ReceivedOrderPage />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/uploader-profile" element={<UploaderProfile />} />
      <Route path="/book-details" element={<BookDetails />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
      <Route path="/login-page" element={<LoginPage />} />
    </Routes>
  );
}
export default App;
