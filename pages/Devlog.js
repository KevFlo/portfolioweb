import { GraphQLClient, gql } from "graphql-request";  
import Head from "next/head";
import BlogCard from "../components/BlogCard"; 
import styles from "../styles/Home.module.css";

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
        thumbnail {
          publishedAt
          createdBy {
            id
          }
          url
        }
      }
    }
  `;
  const SLUGLIST = gql`
  {
    posts {
      slug
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

export default function DevLog({posts}) {
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
