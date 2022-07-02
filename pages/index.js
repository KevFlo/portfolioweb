import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-us-west-2.graphcms.com/v2/cl53ly4r92snx01ued6166tor/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        profilepic {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

import {
  Nav,
  Footer,
  DevLog,
} from "../components";

import {
  About,
  Projects,
  Contact,
  NotFound,
} from ".";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Nav />
//     <Routes>
//       <Link href="/" element={<Home />} /> 
//       <Link href="/About" element={<About />} />
//       <Link href="/Projects" element={<Projects />} />
//       <Link href="/Contact" element={<Contact />} />
//       <Link href="/DevLog" element={<DevLog />} />
//     </Routes>
//     <Footer />
//   </Router>,
//   // document.getElementById('root')
// );
// export default function Home() {
//   return (
//      <div >
//       <header className="Home-header">
//         <img src={logo} className="Home-logo" alt="logo" />
//         <div className="App-welcome-section">
//           <p>
//               Hello, my name is Kevin. I am a student in Computer Science at the University of Houston. I am also an Intern at HPE.
//           </p>
//           <p>
//               I had a passion for technology since I was very young. But, when I was 14 I stumbled upon programming. I have kept learning more and more interesting stuff from then.
//               As of now, I am currently working on devolping my skills with tryhackme as well as migrating into a Linux environment. I am very interested in Dev Ops Security and Network Security
//           </p>
//            There will be better styles for the css after finals, aswell as a better logo and better integration with Github, Wakatime, and other APIs.
//          </div> 
//        </header> 
//     </div> 
//     );
// }
export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Scribbles</title>
        <meta name="description" content="A blog tutorial made with JAMstack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
