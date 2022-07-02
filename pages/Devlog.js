import { GraphQLClient, gql } from "graphql-request";  
import BlogCard from "../components/BlogCard"; 
import styles from "../styles/Home.module.css";

const graphcms = new GraphQLClient("https://api-us-west-2.graphcms.com/v2/cl53ly4r92snx01ued6166tor/master");

const QUERY = gql`
    {
        Devlogs{
            id,
            title,
            datePublished,
            slug,
            content{
                html
            }
            author{
                name,
                profilepic{
                    url
                }
            }
            coverPhoto{
                    url
            }
        }
    }
`;

export async function getStaticProps(){
    const {posts} = await graphcms.request(QUERY);
    return {
        props: {
            posts,
        },
        revalidate: 50,
    };
}


export default function DevLog({posts}) {
    return (
        <>
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

        </>
    );

}