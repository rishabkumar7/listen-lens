// pages/index.js
import { useEffect, useState } from 'react';
import SpotifyApi from '../lib/SpotifyApi';
import Home from '../components/Home';

function getAccessTokenFromUrl() {
  const hash = window.location.hash.substr(1);
  const params = new URLSearchParams(hash);
  return params.get('access_token');
}

export default function Index() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    const accessToken = getAccessTokenFromUrl() || localStorage.getItem('spotify_access_token');
    if (accessToken) {
      const spotifyApi = new SpotifyApi(accessToken);
      setApi(spotifyApi);
    }
  }, []);

  return <Home api={api} />;
}
