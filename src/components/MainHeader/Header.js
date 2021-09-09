import "./header.scss";
import SearchBar from "../SearchBar";
import PropTypes from "prop-types";

export const Header = (props) => {
  return (
    <header className="App-header">
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="nav__element">
            <SearchBar data={props} />
          </li>

          <li className="nav__element nav__element--danger">
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
