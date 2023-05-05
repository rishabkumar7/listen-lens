import SpotifyWebApi from 'spotify-web-api-js';

class SpotifyApi {
  constructor(accessToken) {
    this.spotifyApi = new SpotifyWebApi();
    this.spotifyApi.setAccessToken(accessToken);
  }

  getTopArtists(options = { time_range: 'medium_term', limit: 10 }) {
    return this.spotifyApi.getMyTopArtists(options).then((response) => response);
  }
}

export default SpotifyApi;