import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = ((props) => {
  const inputRef = React.createRef();
  
  const onSubmit = (event) => {
    event.preventDefault();
    const searchWord = inputRef.current.value;

  };

  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" className={styles.img} />
        <h2 className={styles.title}>UTube</h2>
      </div>
      <input ref = {inputRef}
        type="search"
        className={styles.searchBox}
        placeholder="Search.."
      />
      {/* form에서는 button이 눌리면 submit이라는 event가 발생한다! */}
      <button type="submit" className={styles.searchBtn}>
        <img 
        className={styles.buttonImg}
        src="/images/search.png" 
        alt="search"
        />
      </button> 
    </header>
    );
  }
);

export default SearchHeader;