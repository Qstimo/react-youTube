import React from 'react';
import VideoRender from '../VideoRender';
import {Videos} from '../../redux/slices/videosSlice'


type VideoCardProps={
  items:Videos[],
}

const VideoCard:React.FC<VideoCardProps> = ( {items} ) => {

  return (
    <>
      {items.map((video) => (
        <VideoRender key={video.id.videoId} video={video} />
      ))}
    </>
  );
};

export default VideoCard;
