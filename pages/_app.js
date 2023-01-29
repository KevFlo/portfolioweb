import "../styles/globals.css";
import { Nav , Footer, ToTop } from "../components";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <ToTop />
      <Footer />
    </>
  );
}

export default MyApp;