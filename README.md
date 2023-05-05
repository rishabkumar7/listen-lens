# Spotify Analyzer

A React and Next.js web application that connects with your Spotify account to display your most listened artists, with a visually appealing design inspired by Vercel's homepage.

## Features

- Login with your Spotify account
- Displays a list of your most listened artists
- Artist ranking based on your listening habits
- Responsive and mobile-optimized design

## Installation

Follow these steps to set up the project on your local machine:

1. Fork and Clone the repository:

``` bash
git clone https://github.com/your-username/spotify-analyzer.git
cd spotify-analyzer
```

Replace `your-username` with your GitHub username.

2.Install the dependencies:

``` bash
npm install
```

3. Create a `.env.local` file in the root of the project and add your Spotify API credentials:

``` makefile
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
NEXT_PUBLIC_REDIRECT_URI=http://localhost:3000/api/callback
```

Replace `your_client_id` and `your_client_secret` with your Spotify API client ID and client secret, respectively.

4. Run the development server:

``` bash
npm run dev
```

5.Open your browser and navigate to [http://localhost:3000](http://localhost:3000/) to view the web application.

## Usage

1. Click the "Login with Spotify" button on the homepage to authenticate with your Spotify account.
2. Once logged in, the web application will display a list of your most listened artists, ranked by the number of times you've listened to them.

## Technologies

- React
- Next.js
- Spotify Web API

## Author

Rishab Kumar - [rishabkumar.com](https://rishabkumar.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/rishabkumar7/spotify-analyzer/blob/main/LICENSE) file for details.