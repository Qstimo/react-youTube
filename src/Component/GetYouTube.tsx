import React, { useState } from 'react';

import { google } from 'googleapis';

// Замените 'YOUR_CLIENT_ID' на ваш Client ID, полученный в консоли разработчика Google
// const CLIENT_ID = 'YOUR_CLIENT_ID';

// Замените 'YOUR_API_KEY' на ваш API-ключ YouTube API
const API_KEY = 'AIzaSyD0r7qUDnou4e9FX-_x2h503aErHcX4wn4';

const GetYouTube = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState([]);

  // Обработчик входа в приложение через Google
  // const handleLogin = (response: any) => {
  //   console.log('Logged in successfully');
  // };

  // Обработчик выхода из приложения
  // const handleLogout = () => {
  //   console.log('Logged out successfully');
  // };

  // Обработчик изменения поля поискового запроса
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Обработчик отправки запроса на поиск видео
  const searchVideo = () => {
    const youtube = google.youtube({
      version: 'v3',
      auth: API_KEY,
    });

    youtube.search.list(
      {
        part: ['snippet'],
        maxResults: 10,
        q: searchQuery,
      },
      (err: any, response: any) => {
        if (err) {
          console.error('Error searching video:', err);
        } else {
          setVideos(response.data.items);
        }
      }
    );
  };

  return (
    <div>
      <h1>Search Videos</h1>
      
      {/* Кнопка входа через Google */}
      {/* <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
       */}
      {/* Кнопка выхода */}
      {/* <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
      /> */}

      {/* Поле для ввода поискового запроса */}
      <input type="text" value={searchQuery} onChange={handleQueryChange} />
      <button onClick={searchVideo}>Search</button>

      {/* Вывод результатов поиска */}
      {videos.map((video: any) => (
        <div key={video.id.videoId}>
          <h3>{video.snippet.title}</h3>
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {video.id.videoId}
          </a>
        </div>
      ))}
    </div>
  );
};

export default GetYouTube;