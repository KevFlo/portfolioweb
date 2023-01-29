import "../styles/globals.css";
import { Nav , Footer} from "../components";


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;