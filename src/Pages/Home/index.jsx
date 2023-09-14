import React from 'react';
import s from './Home.module.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectSearch } from '../../redux/slices/filterSlice';

function Home() {
  const [videos, setVideos] = React.useState([]);

  const search = useSelector(selectSearch);
  React.useEffect(() => {
    const dataGet = async () => {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%20&chart=mostPopular&maxResults=30&regionCode=ru&key=AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4`,
      );

      setVideos(response.data.items);
    };
    console.log(search);
    // const dataGetSearch = async () => {
    //   const response = await axios.get(
    //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4`,
    //   );

    //   setVideos(response.data.items);
    // };

    dataGet();
  }, [search]);

  const smartTitle = (title) => {
    return title.slice(0, 70) + '...';
  };

  return (
    <div className={s.content}>
      {search}
      {videos &&
        videos.map((video) => (
          <div key={video.id} className={s.videoCardNet}>
            {/* <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} /> */}
            <div className={s.thumbWrap}>
              {' '}
              <iframe
                // width="390"
                // height="300"
                src={`https://www.youtube.com/embed/${video.id}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="allowfullscreen"></iframe>
            </div>

            <div className={s.text}>
              <p>{smartTitle(video.snippet.title)}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home;
// `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=cats&key=AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4`
