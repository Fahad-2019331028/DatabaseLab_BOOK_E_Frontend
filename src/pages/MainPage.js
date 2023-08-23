import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
const MainPage = () => {
  const navigate = useNavigate();

  const onSignUpButtonClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onLoginButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="main-page">
      <main className="body">
        <img className="pic1-mainpage-icon" alt="" src="/pic1mainpage@2x.png" />
        <h1 className="book-e">BOOK-E</h1>
        <h2 className="reuse-and-recycle">Reuse and Recycle Your Books</h2>
        <div className="bttn">
          <button className="sign-up-button" onClick={onSignUpButtonClick}>
            <div className="sign-up">Sign Up</div>
          </button>
          <button className="sign-up-button" onClick={onLoginButtonClick}>
            <div className="sign-up">Login</div>
          </button>
        </div>
      </main>
      <header className="navbar">
        <div className="icon">
          <div className="book-e1">Book-E</div>
          <img className="book-e-icon" alt="" src="/bookeicon.svg" />
        </div>
      </header>
    </div>
  );
};

export default MainPage;
