import React from 'react';
import styles from './Pagination.module.scss';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BiDotsHorizontal } from 'react-icons/bi';

const Pagination = ({
  numberOfPages,
  actualPage,
  nextPage,
  preventPage,
  handleSetPageNumber,
}) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const page = queryParameters.get('page');
  const [actualP, setActualP] = React.useState(1);

  React.useEffect(() => {
    setActualP((prev) => (page ? Number(page) : 1));
  }, [page]);

  const handleIncreasePageNumber = () => {
    if (actualP < numberOfPages) {
      nextPage();
      window.scrollTo(0, 0);
    }
  };

  const handleDegreasePageNumber = () => {
    if (actualP > 1) {
      preventPage();
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={styles.pagination_container}>
      <div className={styles.arrows} onClick={handleDegreasePageNumber}>
        <AiOutlineLeft />
      </div>
      {actualP >= 5 && (
        <>
          <div
            onClick={() => handleSetPageNumber(1)}
            className={
              1 === actualP
                ? `${styles.pagination_block} ${styles.active}`
                : `${styles.pagination_block}`
            }
            key={0}
          >
            1
          </div>
          <div className={`${styles.pagination_block} ${styles.dots}`}>
            <BiDotsHorizontal />
          </div>
        </>
      )}
      {new Array(numberOfPages)
        .fill(1)
        .map((a, i) => i + 1)
        .map((value) => {
          if (value > actualP - 4 && value < actualP + 4) {
            return (
              <div
                onClick={() => handleSetPageNumber(value)}
                className={
                  value === actualP
                    ? `${styles.pagination_block} ${styles.active}`
                    : `${styles.pagination_block}`
                }
                key={value}
              >
                {value}
              </div>
            );
          }
        })}
      {actualP <= numberOfPages - 4 && (
        <>
          <div className={`${styles.pagination_block} ${styles.dots}`}>
            <BiDotsHorizontal />
          </div>
          <div
            onClick={() => handleSetPageNumber(numberOfPages)}
            className={
              numberOfPages === actualP
                ? `${styles.pagination_block} ${styles.active}`
                : `${styles.pagination_block}`
            }
            key={numberOfPages + 1}
          >
            {numberOfPages}
          </div>
        </>
      )}
      <div className={styles.arrows} onClick={handleIncreasePageNumber}>
        <AiOutlineRight />
      </div>
    </div>
  );
};

export default Pagination;
