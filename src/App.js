import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate
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
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react";
import { api } from "./services/api";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const action = useNavigationType();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(()=> {
    const getUser = async () => {
      try {
        const response = await api.get('/api/user/profile');
        setUser(response.data);
        if(PUBLIC_ROUTES.includes(location.pathname)) navigate("/home-page")
      } catch (e) {
        setUser(null);
        console.error(e);
        if(PROTECTED_ROUTES.includes(location.pathname)) navigate("/login-page")
      } finally {
        setLoading(false)
      }
    }
    getUser();
  }, [location])

  if(loading) return <></>

  return (
    <>
      <Routes>
        {user ? 
          <>      
            <Route path="/edit-profile" element={<EditprofilePage />} />
            <Route path="/userprofile-page" element={<UserprofilePage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/received-order" element={<ReceivedPage />} />
            <Route path="/my-order" element={<MyorderPage />} />
            <Route path="/add-book" element={<AddbookPage />} />
            <Route path="/uploaderprofile-page/:user_id" element={<UploaderprofilePage />} />
            <Route path="/bookdetail-page/:book_id" element={<BookdetailPage />} />
          </>
          : 
          <>
            <Route path="/" element={<MainPage />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/sign-up-page" element={<SignupPage />} />
          </>}
      </Routes>
      <ToastContainer 
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
      />
    </>
  );
}

const PUBLIC_ROUTES = [
  "/login-page",
  "/sign-up-page",
  "/"
]

const PROTECTED_ROUTES = [
  "/edit-profile",
  "/userprofile-page",
  "/home-page",
  "/received-order",
  "/my-order",
  "/add-book",
  "/uploaderprofile-page/:user_id",
  "/bookdetail-page/:book_id"
]

export default App;
