import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App() {
  const [videos, setVideos] = useState([]);

  //Component가 mount & update되었을 때 호출함.
  useEffect(()=>{
    //아래의 code block은 postman을 통해 받아온 youtube API임!
    const requestOptions = {  //아래 두줄은 우리가 fetch를 쓸 때, request를 할 때 옵션을 전달하는 것.
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBx7zpz1TGmzf1SUo5r1hzpA_zbnESv9vw", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <idiv className={styles.app}>
      <SearchHeader />
      <VideoList videos={videos}/>
    </idiv>
  );

}

export default App;
