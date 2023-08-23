import { useCallback,useState } from "react";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./FilterBy.css";
const FilterBy = ({ onClose,onApplyFilter }) => {
  const navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedtype, setSelectedType] = useState("")
  const [selectedsort, setSelectedSort] = useState("")
  const handleApplyFilter = () => {
    const filters = {
      genre: selectedGenre,
      book_type: selectedtype,
      sort: selectedsort,
    };
    onApplyFilter(filters);
    onClose();
  };
  // const onFilterButtonClick = useCallback(() => {
  //   navigate("/home-page");
  // }, [navigate]);

  return (
    <div className="filter-by">
      <div className="option">Option</div>
      <Select
        variant="outline"
        w="196px"
        size="sm"
        name="sort_by"
        id="genre"
        placeholder="Genre"
        textColor="#123454"
        backgroundColor="#c0eef5b4"
        borderColor="#114231"
        focusBorderColor="#25443b"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Fiction">Fiction</option>
        <option value="Thriller">Thriller</option>
        <option value="Science Fiction">Science Fiction</option>
      </Select>
      <Select
        variant="outline"
        w="196px"
        size="sm"
        name="sort_by"
        id="book_type"
        placeholder="Book Type"
        textColor="#123454"
        backgroundColor="#c0eef5b4"
        borderColor="#114142"
        focusBorderColor="#214645"
        value={selectedtype}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="Price High to Low">Price High to Low</option>
        <option value="Giveaway">Giveaway</option>
        <option value="Loan">Loan</option>
      </Select>
      <Select
        variant="outline"
        w="196px"
        size="sm"
        name="sort_by"
        id="sort_by"
        placeholder="Sort by"
        textColor="#123454"
        backgroundColor="#c0eef5b4"
        borderColor="#114231"
        focusBorderColor="#325e5b"
        value={selectedsort}
        onChange={(e) => setSelectedSort(e.target.value)}
      >
        <option value="A to Z">A to Z</option>
        <option value="Z to A">Z to A</option>
      </Select>
      <button className="filter-button" onClick={handleApplyFilter}>
        <div className="filter">Filter</div>
      </button>
    </div>
  );
};

export default FilterBy;
