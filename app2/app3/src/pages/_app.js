import '@/styles/assets/css/theme-1.css'
import Script from "next/script";


export default function App({ Component, pageProps }) {

  const renderWithLayout = Component.getLayout ||
    function (page) {
      return page;
    };

  return renderWithLayout(
    <>
    <Script src="/assets/fontawesome/js/all.min.js" />
    <Component {...pageProps} />
  </>);
}