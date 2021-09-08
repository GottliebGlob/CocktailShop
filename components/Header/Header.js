import styles from "./header.module.scss";
import SearchBar from "../SearchBar";
import PropTypes from "prop-types";
import Image from "next/image"
import mainIcon from "../../public/main-icon.png"

export const Header = (props) => {
  return (
    <header className={styles.appHeader}>
      <div className={styles.logo}>
        <Image src={mainIcon} alt="Cocktail picture..." />
      </div>
      <nav>
        <ul className={styles.mainNav__items}>
          <li className={styles.nav__element}>
            <SearchBar data={props} />
          </li>

          <li className={[styles.nav__element, styles.nav__elementDanger].join(" ")}>
            <a onClick={() => props.onOrderClick()}>
              Order now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    searchResult: PropTypes.string,
    setSearchResult: PropTypes.func,
  }),
};
