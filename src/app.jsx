import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {  //아래 두줄은 우리가 fetch를 쓸 때, request를 할 때 옵션을 전달하는 것.
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBx7zpz1TGmzf1SUo5r1hzpA_zbnESv9vw", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return <VideoList videos={videos}/>;

}

export default App;
