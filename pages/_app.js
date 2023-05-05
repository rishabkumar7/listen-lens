// pages/_app.js
import '../styles.css';
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  <GoogleAnalytics trackPageViews />
  
  return <Component {...pageProps} />;
}

export default MyApp;