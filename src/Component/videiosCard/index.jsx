import React from 'react'
import s from './index.module.scss'

const VideoCard= ({videos,}) =>{
    const smartTitle = (title) => {
        return title.slice(0, 70) + '...';
      };
  return (
    <div>  {
        videos.map((video) => (
          <div key={video.id} className={s.videoCardNet}>
            {/* <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} /> */}
            <div className={s.thumbWrap}>
              {' '}
              <iframe
                // width="390"
                // height="300"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div className={s.text}>
              <p>{smartTitle(video.snippet.title)}</p>
            </div>
          </div>
        ))}</div>
  )
}

export default VideoCard