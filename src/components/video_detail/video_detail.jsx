import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video}) => (
    <section className={styles.detail}>
      {/* 밑에는 Youtube API에서 Iframe-> Sample ->  Show player parameters 통해 가져옴! */}
      <iframe
        className={styles.video}
        // id="ytplayer" 
        type="text/html" 
        title="youtube video player"
        width="100%" 
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0" 
        allowFullScreen>
      </iframe>
      <h2>{video.snippet.title}</h2>
      <h3>{video.snippet.channelTitle}</h3>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
  );

export default VideoDetail;