import fs from 'fs';
import Markdown from "markdown-to-jsx";
import matter from 'gray-matter';
import getPostMetadata from '../../../../components/getPostMetadata';
import Image from 'next/image';

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = await getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  const postImages = post.data.images;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {postImages && postImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {postImages.map((image: { path: string; fit?: 'cover' | 'contain'; span?: number }, index: number) => (
              <div key={index} className={`relative rounded-lg shadow-lg overflow-hidden ${image.span === 2 ? 'md:col-span-2' : ''} ${image.span === 3 ? 'md:col-span-3' : ''}`}>
                <Image
                  src={image.path}
                  alt={post.data.title || `Blog Post Image ${index + 1}`}
                  width={900} // Increased default width
                  height={600} // Increased default height
                  className="w-full h-auto object-cover"
                  style={{ objectFit: image.fit || 'cover' }}
                />
              </div>
            ))}
          </div>
        )}

        <div className={postImages && postImages.length > 0 ? "" : "md:col-span-2"}>
          <article className="prose max-w-none">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PostPage;