import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
// import CV from '../images/CV.png'; // Import the converted image of page 1
import resumePage1 from '/public/images/resume.png'; // Import the converted image of page 2

const Resume = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <div className="flex flex-col items-center">
        <Image src={resumePage1} alt="Resume Page 1" width={600} height={800} />
        {/* <Image src={resumePage2} alt="Resume Page 2" width={600} height={800} /> */}
      </div>
    </div>
  );
};

export default Resume;