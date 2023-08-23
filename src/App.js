import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ReceivedPage from "./pages/ReceivedPage";
import MyorderPage from "./pages/MyorderPage";
import AddbookPage from "./pages/AddbookPage";
import EditprofilePage from "./pages/EditprofilePage";
import UserprofilePage from "./pages/UserprofilePage";
import UploaderprofilePage from "./pages/UploaderprofilePage";
import BookdetailPage from "./pages/BookdetailPage";
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
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page4":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page3":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page2":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page1":
        title = "";
        metaDescription = "";
        break;
      case "/userprofile-page":
        title = "";
        metaDescription = "";
        break;
      case "/uploaderprofile-page":
        title = "";
        metaDescription = "";
        break;
      case "/bookdetail-page":
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
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/sign-up-page" element={<SignupPage />} />
      <Route path="/sign-up-page4" element={<ReceivedPage />} />
      <Route path="/sign-up-page3" element={<MyorderPage />} />
      <Route path="/sign-up-page2" element={<AddbookPage />} />
      <Route path="/sign-up-page1" element={<EditprofilePage />} />
      <Route path="/userprofile-page" element={<UserprofilePage />} />
      <Route path="/uploaderprofile-page/:user_id" element={<UploaderprofilePage />} />
      <Route path="/bookdetail-page/:book_id" element={<BookdetailPage />} />
    </Routes>
  );
}
export default App;
