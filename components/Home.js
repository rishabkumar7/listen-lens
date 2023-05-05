// components/Home.js
import { useEffect, useState } from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

function getScaleFactor(index, totalArtists) {
  const baseScale = 1;
  const maxScale = 2.5;
  const scaleFactor = (totalArtists - index) / totalArtists;

  return baseScale + (maxScale - baseScale) * scaleFactor;
}

function Home({ api }) {
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    if (api) {
      api.getTopArtists()
        .then((response) => {
          setTopArtists(response.items);
        })
        .catch((error) => {
          console.error('Error fetching top artists:', error);
        });
    }
  }, [api]);

  const login = () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
    const scope = 'user-top-read';
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;
    window.location.href = url;
  };

  return (
    <div className="home">
      <h1 className="heading">Spotify Analyzer</h1>
      {!api && (
        <button className="login-button" onClick={login}>
          <FontAwesomeIcon icon={faSpotify} />
          {' '}
          Log in with Spotify
        </button>
      )}

      {api && (
        <div className="top-artists">
          <h2>Your Top Artists</h2>
          <ul>
            {topArtists.map((artist, index) => (
              <li
                key={artist.id}
                style={{
                  transform: `scale(${getScaleFactor(index, topArtists.length)})`,
                }}
              >
                <img src={artist.images[0].url} alt={artist.name} />
                <span>{artist.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
