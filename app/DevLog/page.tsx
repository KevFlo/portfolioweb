import getPostMetadata from '../../components/getPostMetadata';
import PostPreview from '../../components/PostPreview';

const DevLog = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
        
  return (
    <div className='pt-4'>
      <h1 className='text-3xl font-bold mb-6'>DevLog</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-64 ">{postPreviews}
          <div className='h-24' >
                            <br/>
                            <br/>
                        </div>
        </div>
    </div>
   
    
  );
};

export default DevLog;