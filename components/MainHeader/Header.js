import styles from "./header.module.scss";
import SearchBar from "../SearchBar";
import PropTypes from "prop-types";

export const Header = (props) => {
  return (
    <header className={styles.AppHeader}>
      <nav>
        <ul className={styles.mainNavItems}>
          <li className="nav__element">
            <SearchBar data={props} />
          </li>
          <li className={[styles.navElement, styles.navElement_danger].join(" ")}>
            <a href="/#" onClick={() => props.onOrderClick()}>
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
