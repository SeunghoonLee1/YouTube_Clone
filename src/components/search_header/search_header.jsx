import React, {memo, useRef} from 'react';
import styles from './search_header.module.css';

const SearchHeader =  memo(((props) => {
    const inputRef = React.useRef();
    // const onSubmit = (event) => {
    //   event.preventDefault();
    //   const searchWord = inputRef.current.value;
    // };

    const handleSearch = ()=>{
      const value = inputRef.current.value;
      props.onSearch(value);
      // props.setSelectedVideo(undefined);
      //만약 위에서 const SearchHandler = (({onSearch})) => ...였다면
      //여기에서도 그냥 onSearch(value);라고 부름!!
    };

    const onClick = (event) =>{
      handleSearch();
    };

    const onKeyPress = (event) =>{
      if(event.key === 'Enter'){
        handleSearch();
      }
    }

    // console.log(`header!!`);
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
          onKeyPress={onKeyPress}
        />
        {/* form에서는 button이 눌리면 submit이라는 event가 발생한다! */}
        <button type="submit" className={styles.searchBtn} onClick={onClick}>
          <img 
          className={styles.buttonImg}
          src="/images/search.png" 
          alt="search"
          />
        </button> 
      </header>
      );
    }
  )
);

export default SearchHeader;