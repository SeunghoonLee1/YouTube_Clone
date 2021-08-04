import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBx7zpz1TGmzf1SUo5r1hzpA_zbnESv9vw`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId}))) 
      //items배열을 map을 통해서 돌면서 배열안에 있는 각각의 아이템을 새로운 오브젝트! 로 변환해줌. ({}을 썼으므로..)
      //이때 새로운 objectsms 기존 아이템의 동일한 정보를 갖고 있으나 id만 새로운 값으로 덮어 씌워진다!
      //Q. 이과정을 왜하는가? 
      //A. 아래의 videoList를 받아오는 API에선 items.id에 하나의 문자열로 이루어진 id가 있었지만, 이번에는 items.id가 
      //  객체로 존재하므로 오류가 발생.. 하나의 문자열로 이루어진 Id를 넣어주기 위해서 이 과정을 진행!
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };
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
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/>
    </idiv>
  );

}

export default App;
