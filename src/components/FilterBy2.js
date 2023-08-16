import { useCallback } from "react";
import { RadioGroup, Radio } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./FilterBy2.module.css";
const FilterBy2 = ({ onClose }) => {
  const navigate = useNavigate();

  const onFilterButtonClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className={styles.filterBy2}>
      <button className={styles.filterButton} onClick={onFilterButtonClick}>
        <div className={styles.filter}>Filter</div>
      </button>
      <div className={styles.bookType} id="book_type">
        <div className={styles.bookType1}>Book type</div>
        <RadioGroup className={styles.priceHL} id="price_h_l">
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
        <RadioGroup className={styles.giveaway} id="giveaway">
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
        <RadioGroup className={styles.loan} id="loan">
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
        <RadioGroup className={styles.drama} id="drama">
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
        <RadioGroup className={styles.thriller} id="thriller">
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
        <RadioGroup className={styles.fiction} id="fiction">
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
        <RadioGroup className={styles.scienceFiction} id="sci_fi">
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
        <RadioGroup className={styles.crime} id="crime">
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
          <RadioGroup className={styles.zA} id="z_to_a">
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
