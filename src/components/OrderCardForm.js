import { useMemo } from "react";
import BookForm from "./BookForm";
import styles from "./OrderCardForm.module.css";
const OrderCardForm = ({ imageDimensions, frameLeft, onFrameLinkClick }) => {
  const orderCardStyle = useMemo(() => {
    return {
      left: frameLeft,
    };
  }, [frameLeft]);

  return (
    <div className={styles.orderCard} style={orderCardStyle}>
      <div className={styles.orderCardChild} />
      <section className={styles.checkStatusButton}>
        <div className={styles.checkStatus}>Check Status</div>
      </section>
      <BookForm
        imageDimensions="/rectangle-116@2x.png"
        carImageDimensions="/rectangle-5@2x.png"
        imageDimensionsString="/frame9.svg"
        propLeft="-9px"
        propTop="6px"
        onFrameLinkClick={onFrameLinkClick}
      />
    </div>
  );
};

export default OrderCardForm;
