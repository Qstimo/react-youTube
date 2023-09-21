import React from 'react';
import s from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectForm, selectSearch, selectSort } from '../../redux/slices/filterSlice';
import VideoCard from '../../Component/videiosCard';
import SkeletonVideoCard from '../../Component/videiosCard/SkeletonVideoCard';
import { fetchVideos, selectVideosData } from '../../redux/slices/videosSlice';
import Select from '../../Component/Select';
import NotFound from '../NotFound';

function Home() {
  const lastElement = React.useRef();
  const observer = React.useRef();
  
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectVideosData);
  const [videos, setVideos] = React.useState([]);
  const [result, setResult] = React.useState(24);
  const sort = useSelector(selectSort);
  const getDataVideos = async () => {
    const query = search ? search : '';
    const regionCode = 'RU'; // Код региона, например, RU для России
    const order = sort.sortProperty; // Порядок сортировки, например, relevance или date
    const maxResults = result; // Максимальное количество результатов поиска
    const nextPageToken = 1;
    dispatch(fetchVideos({ query, regionCode, order, maxResults,nextPageToken }));
  };

  React.useEffect(()=>{
    if(status === 'loading') return;
    if(status === 'error') return;
    if(observer.current) observer.current.disconnect();
    var cb = function(entries){
    if(entries[0].isIntersecting){
      setResult(result+24)
    }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(lastElement.current)
  },[status])

  
  const formVideo = useSelector(selectForm);

  const search = useSelector(selectSearch);
  

  React.useEffect(() => {
    getDataVideos();
  }, [search, sort, formVideo,result]);

  const skeleton = [...new Array(12)].map((_, i) => <SkeletonVideoCard key={i} />);
  if (status === 'error') {
    return <NotFound/>;
  }
  return (
    <>
      <Select />
      <div className={formVideo ? s.content : s.contentList}>
        {status === 'loading' ? skeleton : <VideoCard items={items} />}
      </div>
      <div ref={lastElement} className={s.lastDiv}></div>
    </>
  );
}

export default Home;
// `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=cats&key=AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4`
