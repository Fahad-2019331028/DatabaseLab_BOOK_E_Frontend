import { useState, useCallback } from "react";
import FilterBy2 from "./FilterBy2";
import PortalPopup from "./PortalPopup";
import styles from "./FilterButton.module.css";
import { api } from '../services/api';
const FilterButton = ({ applyFilters, selectedFilters }) => {
  const [isFilterBy2Open, setFilterBy2Open] = useState(false);
  const [filters, setFilters] = useState({
    sort: "",
    genre: "",
    bookType: "",
  });
  const handleApplyFilters = () => {
    applyFilters(filters); // Pass selected filters to the applyFilters function
    closeFilterBy2(); // Close the filter popup
  };
  const openFilterBy2 = useCallback(() => {
    setFilterBy2Open(true);
  }, []);

  const closeFilterBy2 = useCallback(() => {
    setFilterBy2Open(false);
  }, []);
  // const applyFilters = async (filters) => {
  //   try {
  //     const response = await api.get("/api/book/filterBooks", { params: filters });
  //     const filteredBooksData = response.data;

  //     updateFilteredBooks(filteredBooksData); // Update the filtered books in HomePage
  //     closeFilterBy2(); // Close the filter popup
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <>
      <button className={styles.filter} onClick={openFilterBy2}>
        <div className={styles.filterBy}>Filter by</div>
      </button>
      {isFilterBy2Open && (
        <PortalPopup
          overlayColor="rgba(112, 112, 112, 0)"
          placement="Centered"
          onOutsideClick={closeFilterBy2}
        >
          <FilterBy2 onClose={closeFilterBy2} applyFilters={applyFilters} selectedFilters={selectedFilters} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilterButton;
