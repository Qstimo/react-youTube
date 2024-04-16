import React from 'react';
import s from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectForm, selectSearch, selectSort } from '../../redux/slices/filterSlice';
import VideoCard from '../../Component/videiosCard';
import SkeletonVideoCard from '../../Component/videiosCard/SkeletonVideoCard';
import { fetchVideos, selectVideosData } from '../../redux/slices/videosSlice';
import Select from '../../Component/Select';
import NotFound from '../NotFound';
import { useInView } from 'react-intersection-observer';

function Home() {


  const dispatch = useDispatch();
  const { items, status } = useSelector(selectVideosData);
  const [result, setResult] = React.useState(24);
  const sort = useSelector(selectSort);
  const getDataVideos = async () => {
    const query = search ? search : '';
    const regionCode = 'RU'; // Код региона, например, RU для России
    const order = sort.sortProperty; // Порядок сортировки, например, relevance или date
    const maxResults = result; // Максимальное количество результатов поиска
    const nextPageToken = 1;
    dispatch(fetchVideos({ query, regionCode, order, maxResults, nextPageToken }));
  };

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  React.useEffect(() => {
    if (status !== 'loading' || status !== 'erorr') {
      inView && setResult(result + 24);
    }
  }, [inView]);

  const formVideo = useSelector(selectForm);

  const search = useSelector(selectSearch);

  React.useEffect(() => {
    getDataVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sort, formVideo, result]);

  const skeleton = [...new Array(12)].map((_, i) => <SkeletonVideoCard key={i} />);
  if (status === 'error') {
    return <NotFound />;
  }
  return (
    <>
      <Select />
      <div className={formVideo ? s.content : s.contentList}>
        {status === 'loading' ? skeleton : <VideoCard items={items} />}
      </div>
      <div ref={ref} className={s.lastDiv}></div>
    </>
  );
}

export default Home;
