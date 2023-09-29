import Providers from "./providers";
import { Nav , Footer} from "../components";
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
      
      <html>
        <body>
          <Providers >
            <Nav />
              {children}
          </Providers>
          <Footer />
        </body>
      </html>
  )
}
