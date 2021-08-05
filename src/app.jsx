import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App({youtube}) {
  const [videos, setVideos] = useState([]); //function에서 state사용할 때

  const search = (query) => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  };
    //.then(videos => setVideos(videos));

  //Component가 mount & update되었을 때 호출함.
  useEffect(()=>{
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
    // .then(videos => setVideos(videos));
  }, []);

  return (
    <idiv className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/>
    </idiv>
  );
}

export default App;
