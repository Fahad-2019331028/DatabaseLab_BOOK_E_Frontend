import { useState,useCallback } from "react";
import { RadioGroup, Radio } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./FilterBy2.module.css";
const FilterBy2 = ({ onClose,applyFilters,selectedFilters }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState(selectedFilters || {
    sort: "",
    genre: "",
    bookType: "",
  });
  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };
  const onFilterButtonClick = useCallback(() => {
    applyFilters(filters); // Apply filters based on selectedFilters
    onClose();
  }, [applyFilters, onClose, filters]);

  return (
    <div className={styles.filterBy2}>
      <button className={styles.filterButton} onClick={onFilterButtonClick}>
        <div className={styles.filter}>Filter</div>
      </button>
      <div className={styles.bookType} id="book_type">
        <div className={styles.bookType1}>Book type</div>
        <RadioGroup 
        className={styles.priceHL} 
        id="price_h_l"
        value={filters.bookType}
        onChange={(value) => handleFilterChange('bookType', value)}
        >
          <Radio
            defaultChecked
            colorScheme="green"
            name="price_h_l"
            id="price_h_l"
            size="sm"
          >
            Price High to Low
          </Radio>
        </RadioGroup>
        <RadioGroup 
        className={styles.giveaway} 
        id="giveaway"
        value={filters.bookType}
        onChange={(value) => handleFilterChange('bookType', value)}
        >
          <Radio
            defaultChecked
            colorScheme="green"
            name="giveaway"
            id="giveaway"
            size="sm"
          >
            Giveaway
          </Radio>
        </RadioGroup>
        <RadioGroup 
        className={styles.loan} 
        id="loan"
        value={filters.bookType}
        onChange={(value) => handleFilterChange('bookType', value)}
        >
          <Radio
            defaultChecked
            colorScheme="green"
            name="loan"
            id="loan"
            size="sm"
          >
            Loan
          </Radio>
        </RadioGroup>
      </div>
      <div className={styles.genre} id="genre">
        <div className={styles.bookType1}>Genre</div>
        <RadioGroup 
        className={styles.drama} 
        id="drama"
        value={filters.genre}
        onChange={(value) => handleFilterChange('genre', value)}>
          <Radio
            defaultChecked
            colorScheme="green"
            name="drama"
            id="drama"
            size="sm"
          >
            Drama
          </Radio>
        </RadioGroup>
        <RadioGroup 
        className={styles.thriller} 
        id="thriller"
        value={filters.genre}
        onChange={(value) => handleFilterChange('genre', value)}>
          <Radio
            defaultChecked
            colorScheme="green"
            name="thriller"
            id="thriller"
            size="sm"
          >
            Thriller
          </Radio>
        </RadioGroup>
        <RadioGroup 
        className={styles.fiction} 
        id="fiction"
        value={filters.genre}
        onChange={(value) => handleFilterChange('genre', value)}>
          <Radio
            defaultChecked
            colorScheme="green"
            name="fiction"
            id="fiction"
            size="sm"
          >
            Fiction
          </Radio>
        </RadioGroup>
        <RadioGroup 
        className={styles.scienceFiction} 
        id="sci_fi"
        value={filters.genre}
        onChange={(value) => handleFilterChange('genre', value)}>
          <Radio
            defaultChecked
            colorScheme="green"
            name="sci_fi"
            id="sci_fi"
            size="sm"
          >
            Science Fiction
          </Radio>
        </RadioGroup>
        <RadioGroup className={styles.crime} 
        id="crime"
        value={filters.genre}
        onChange={(value) => handleFilterChange('genre', value)}>
          <Radio
            defaultChecked
            colorScheme="green"
            name="crime"
            id="crime"
            size="sm"
          >
            Crime
          </Radio>
        </RadioGroup>
      </div>
      <div className={styles.sortBy} id="sort_by">
        <div className={styles.sortBy1}>Sort By</div>
        <div className={styles.frame}>
          <RadioGroup 
          className={styles.zA} 
          id="z_to_a" 
          value={filters.genre}
          onChange={(value) => handleFilterChange('sort', value)}>
            <Radio
              defaultChecked
              colorScheme="green"
              name="z_to_a"
              id="z_to_a"
              size="sm"
            >
              Z to A
            </Radio>
          </RadioGroup>
        </div>
        <div className={styles.frame1}>
          <Radio
            defaultChecked
            colorScheme="green"
            name="a_to_z"
            id="a_to_z"
            size="sm"
          >
            A to Z
          </Radio>
        </div>
      </div>
    </div>
  );
};

export default FilterBy2;
