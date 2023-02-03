import React from 'react';
import styles from './DropDown.module.scss';
import { BiCategoryAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearActualSubcategories,
  searchActualCategory,
} from '../../../redux/Slicess/homeSlice';

const DropDown = () => {
  const dispatch = useDispatch();
  const [pinCode, setPinCode] = React.useState('');
  const [categoryName, setCategoryName] = React.useState('');
  const { categories, actualSubcategories, actualCategory } = useSelector(
    (state) => state.home
  );

  const { language } = useSelector((state) => state.language);

  React.useEffect(() => {
    if (pinCode) {
      const getSubcategories = setTimeout(() => {
        dispatch(searchActualCategory({ language, id: pinCode.id }));
        setCategoryName(pinCode.name);
      }, 250);

      return () => clearTimeout(getSubcategories);
    }
  }, [pinCode]);

  const getActualSubcategories = (el) => {
    setPinCode({ name: el.name, id: el.category_id });
  };

  return (
    <>
      <div className={styles.dropdownContainer}>
        <Link className={styles.categoryButton} to='/categories'>
          <BiCategoryAlt />
          <span>КАТАЛОГ</span>
        </Link>
        <div className={styles.dropdownContent}>
          <div className={styles.dropdown}>
            {categories &&
              categories[language] &&
              categories[language]
                .filter((el) => el.parent_id === 0)
                .map((el) => (
                  <Link
                    to={`/group_${el.url}`}
                    onMouseEnter={() => getActualSubcategories(el)}
                    key={el.url}
                  >
                    <div className={styles.indikator}></div>
                    {el.name}
                  </Link>
                ))}
          </div>

          <div className={styles.categoryItems}>
            <h3>
              {categoryName}
              <div className={styles.itemsIndikator}></div>
            </h3>
            <div className={styles.subContainer}>
              {actualSubcategories.map((el) => (
                <div className={styles.itemsContainer} key={el.url}>
                  <Link
                    className={styles.item}
                    // onClick={() => dispatch(actualSubcategoriesPageClean())}
                    to={`/group_${el.url}`}
                  >
                    {el.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
