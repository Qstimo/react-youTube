import React from 'react';
import s from './Home.module.scss';
import axios from 'axios';
import Theme from '../../Component/Theme';

function Home() {
  const [videos, setVideos] = React.useState([]);
  React.useEffect(() => {
    const dataGet = async () => {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%20&chart=mostPopular&maxResults=30&regionCode=ru&key=AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4`,
      );

      setVideos(response.data.items);
      console.log(response.data.items);
    };
    dataGet();
    const data = dataGet();
  }, []);

  return (
    <div className={s.content}>
      {videos &&
        videos.map((video) => (
          <div key={video.id} className={s.videoCard}>
            {/* <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} /> */}
            <iframe
              // width="390"
              // height="300"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>

            {/* <video
              tabindex="-1"
              class="video-stream html5-main-video"
              controlslist="nodownload"
              style={{ width: '574px', height: '323px', left: '0px', top: '0px' }}
              src={`https://www.youtube.com/watch?v=${video.id}`}></video> */}
            <p>{video.snippet.title}</p>
          </div>
        ))}
    </div>
  );
}

export default Home;
// `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=cats&key=AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4`
