import React from "react";
import styles from "./SearchBar.module.scss";
import PropTypes from "prop-types";

export const SearchBar = (props) => {
  const { searchResult, setSearchResult } = props.data;

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Search"
        value={searchResult}
        onChange={(e) => setSearchResult(e.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  data: PropTypes.shape({
    searchResult: PropTypes.string,
    setSearchResult: PropTypes.func,
  }),
};
