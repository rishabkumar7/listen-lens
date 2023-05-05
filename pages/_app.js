// pages/_app.js
import '../styles.css';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  <GoogleAnalytics trackPageViews />
  
  return (
    <>
  <Component {...pageProps} />
  <Analytics />
  </>
  );
}

export default MyApp;