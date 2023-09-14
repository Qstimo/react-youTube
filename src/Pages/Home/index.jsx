import React from 'react';
import s from './Home.module.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectSearch } from '../../redux/slices/filterSlice';
import VideoCard from '../../Component/videiosCard';
import SkeletonVideoCard from '../../Component/videiosCard/SkeletonVideoCard';

function Home() {
  const [videos, setVideos] = React.useState([]);

  const search = useSelector(selectSearch);
  React.useEffect(() => {
    // const dataGet = async () => {
    //   const response = await axios.get(
    //     `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%20&chart=mostPopular&maxResults=30&regionCode=ru&key=AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4`,
    //   );

    //   setVideos(response.data.items);
    // };
    // async function searchVideos(query) {
    //   const apiKey = 'AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4';
    //   // const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}`;
    //   const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%20&chart=mostPopular&maxResults=30&regionCode=ru&q=${query}&key=${apiKey}`;
    
    //   try {
    //     const response = await axios.get(apiUrl);
      
    //      setVideos(response.data.items);
    //   } catch (error) {
    //     console.error(error);
        
    //   }
    // }

    async function searchVideos(query, regionCode, order, maxResults) {
      const apiKey = 'AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4';
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&regionCode=${regionCode}&order=${order}&maxResults=${maxResults}&key=${apiKey}`;
    
      try {
        const response = await axios.get(apiUrl);
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
  
    }

const query = 'котики';
const regionCode = 'RU'; // Код региона, например, RU для России
const order = 'relevance'; // Порядок сортировки, например, relevance или date
const maxResults = 12; // Максимальное количество результатов поиска

searchVideos(search, regionCode, order, maxResults)
  .then((data) => {
    setVideos(data.items);
    console.log(data)
  })
  .catch((error) => {
    console.error(error);
  });

  }, [search]);
  const skeleton = [...new Array(12)].map(i=><SkeletonVideoCard key={i}/>);


  return (
    <div className={s.content}>
     {videos ? skeleton: <VideoCard videos={videos}/>}
      
    </div>
  );
}

export default Home;
// `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=cats&key=AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4`
