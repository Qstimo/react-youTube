import React from 'react';
import s from './index.module.scss';
import VideoRender from '../VideoRender';

const VideoCard = ({ videos }) => {
  return (
    <>
      {videos.map((video) => (
        <VideoRender key={video.id.videoId} video={video} />
      ))}
    </>
  );
};

export default VideoCard;
