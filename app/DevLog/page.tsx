import getPostMetadata from '../../components/getPostMetadata';
import PostPreview from '../../components/PostPreview';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import mk from '../../public/images/mendkiwi.jpg';

const DevLog = () => {

    const READMECont = `
    Hey there! I'm Kevin.                                                                 |
                                                                                          |
    I’m currently working on:                                                             |
    -    TryHackMe OSI Models and a cluster computation project using 6 raspberrypies     |
    -    Creating my own Private Cloud Server, and learning about VPN tunneling           |
    -    Creating a P2P chat server and client with E2E ecription                         |
                                                                                          |
    ## 🚀💻                                                                                |
    | Technologies         | Vim  | Github | Raspberry Pi | Python | c++ |                |
                           | Java | React | Nodejs | Docker | NextJS | Kubernetes |       |
    |----------------------|----------------------|---------------|-------|----|----------|
    |----------------------|----------------------|---------------|-------|----|----------|
    | Tools                | VS Code | Tmux | Kali | Discord | Docker| Yarn | ESLint |    |
                           |Bash   | Zsh    |                                             |
                                                                                          |
    Here are some posts on stuff that I am either thinking about or currently working on. |
    All the FOSS stuff at least.                                                          |
    --------------------------------------------------------------------------------------|
                                  \\/\/\/\\\//\ \// \/
                                   \\/\/\/\//\//\\\/
                                    \\\//\/\\\\//
                                     \\\/\//\//
                                      \\|\//
                                       \\/
                                      
    `;

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
        
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <Image 
              src={mk} 
              alt="Devme" 
              width={525} 
              height={420} 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
          <div>
            <ReactMarkdown>{READMECont}</ReactMarkdown>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {postPreviews}
          </div>
        </div>

      </div>
  );
};


export default DevLog;
