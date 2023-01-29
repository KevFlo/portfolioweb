import "../styles/globals.css";
import { Nav , Footer} from "../components";
import { SessionProvider } from 'next-auth/react';


function MyApp({
  Component,
  pageProps: { session, ...pageProps }}) {
  return (
    <SessionProvider session={session}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;