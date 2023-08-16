import { useState, useCallback } from "react";
import FilterBy2 from "./FilterBy2";
import PortalPopup from "./PortalPopup";
import styles from "./FilterButton.module.css";
const FilterButton = () => {
  const [isFilterBy2Open, setFilterBy2Open] = useState(false);

  const openFilterBy2 = useCallback(() => {
    setFilterBy2Open(true);
  }, []);

  const closeFilterBy2 = useCallback(() => {
    setFilterBy2Open(false);
  }, []);

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
          <FilterBy2 onClose={closeFilterBy2} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilterButton;
