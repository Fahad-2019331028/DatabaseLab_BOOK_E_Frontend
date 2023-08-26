import { useState,useEffect,useCallback } from "react";
import { Select } from "@chakra-ui/react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import "./AddbookPage.css";
const AddbookPage = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    book_img_url:"",
    book_condition: "",
    book_type: "", // Default value
    price: "",
  });
  const fetchGenres = async () => {
    try {
      const response = await api.get("/api/genre/all");
      setGenres(response.data);
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };
  
  useEffect(() => {
    fetchGenres();
  }, []);
  
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

  const onAddButtonClick = useCallback(async (e) => {
    e.preventDefault()
    try {
      // Send the book data to the backend
      const response = await api.post("/api/book/add", formData);

      toast.success("Book added successfully")
      navigate("/userprofile-page");
    } catch (error) {
      console.error(error);
      toast.error("Couldn't add book");
      // Handle error here
    }
  }, [formData, navigate]);
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
console.log(genres)
  return (
    <div className="addbook-page">
      <img className="pic-left-align-icon" alt="" src="/pic-leftalign@2x.png" />
      <header className="navbar6">
        <div className="icon6" onClick={onIconContainerClick}>
          <div className="book-e9">Book-E</div>
          <img className="book-e-icon6" alt="" src="/bookeicon.svg" />
        </div>
        <div className="nav-bttn3">
          <button className="home-page4" onClick={onHomePageClick}>
            Home Page
          </button>
          <button className="profile6" onClick={onProfileClick}>
            <img className="pr-icon3" alt="" src="/pr-icon.svg" />
            <button className="home-page4">Profile</button>
          </button>
          <div className="logout3" onClick={onLogoutContainerClick}>
            <button className="log-out3">Log Out</button>
            <img className="logout-icon3" alt="" src="/logout-icon.svg" />
          </div>
        </div>
      </header>
      <main className="body6">
        <h1 className="add-a-book">Add A Book</h1>
        <form className="edit-form" method="post">
          <div className="title18">
            <div className="add-photo-url">Title</div>
            <input
              className="title20"
              type="text"
              placeholder="Title"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="price4">
            <div className="add-photo-url">Author</div>
            <input
              className="autho"
              type="text"
              placeholder="Author"
              required
              id="author"
              value={formData.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="price4">
            <div className="add-photo-url">Genre</div>
            <Select
              className="option1"
              variant="outline"
              w="782px"
              name="Genre"
              required id="genre"
              placeholder="Genre"
              textColor="#123454"
              backgroundColor="#c0eef5b4"
              borderColor="#114231"
              focusBorderColor="#325e5b"
              value={formData.genre}
              onChange={handleInputChange}
              style={{ fontSize: "var(--font-size-xl)" }} // Custom font size
            >
              {genres.map((genre) => (
                <option key={genre.id} value={genre.name}>
                  {genre.name}
                </option>
              ))}
            </Select>


          </div>
          <div className="description">
            <div className="description1">Description</div>
            <textarea
              className="description2"
              type="text"
              placeholder="description"
              required
              id="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="book-dp-link">
            <div className="add-photo-url">Add Photo Url</div>
            <input
              className="add-url"
              type="text"
              placeholder="Photo url"
              id="book_img_url"
              value={formData.book_img_url}
              onChange={handleInputChange}
            />
          </div>
          <div className="booktyp85">
            <div className="add-photo-url">Condtion</div>
            <input
              className="condition55"
              type="text"
              placeholder="condition"
              required
              id="book_condition"
              value={formData.book_condition}
              onChange={handleInputChange}
            />
          </div>
          <div className="booktyp">
            <div className="book-typ36">Book Typ</div>
            <Select
              className="option1"
              variant="outline"
              w="782px"
              name="booktype"
              id="book_type"
              placeholder="Book Type"
              textColor="#123454"
              backgroundColor="#c0eef5b4"
              borderColor="#114231"
              focusBorderColor="#325e5b"
              value={formData.book_type}
              onChange={handleInputChange}
            >
              <option value="Sale">Sale</option>
              <option value="Giveaway">Giveaway</option>
              <option value="Loan">Loan</option>
            </Select>
          </div>
          <div className="price">
            <div className="add-photo-url">Price</div>
            <input
              className="price2"
              type="number"
              placeholder="NULL if Book Not for Sale"
              id="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <button className="add-bttn" onClick={onAddButtonClick}>
            <div className="add">Add</div>
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddbookPage;
