import axios from 'axios';
import React from 'react';

function SearchVideo() {
  React.useEffect(() => {
    const data = axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=30&key=AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4`,
    );
    console.log(data);
  }, []);
  return <div>SearchVideo</div>;
}

export default SearchVideo;
