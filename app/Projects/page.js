import React from "react";

function Projects() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Projects</h1>
        <div className="px-4 bg-slate-900 ">
            <ul className="flex justify-around text-white">
                <li><a href="https://github.com/KevFlo/P2PMessenger">P2P Chat App</a></li>
                <li>Kubernetes 6 pi cluster computer/server</li>
                <li><a href="https://tryhackme.com/p/Azath0th">TryHackMe</a></li>
                <li>Pen Testing Course</li>
                <li>I want to get the turing pi 2 to test.</li>
            </ul>
        </div>
        <br></br>
        <div >
          <ul className="list-none columns-2">
            <figure><embed  className="w-full aspect-video ..." src="https://wakatime.com/share/@KevFlo/7d4a9397-f498-47f4-8d94-a3ad80322934.svg"></embed></figure>
            <figure><embed  className="w-full aspect-video ..." src="https://wakatime.com/share/@KevFlo/22527ea2-46e3-4be9-b135-503d6db55bd1.svg"></embed></figure>
            <figure><embed  className="w-full aspect-video ..." src="https://wakatime.com/share/@KevFlo/98089332-e4ba-493a-a6e8-57261541cb2c.svg"></embed></figure>
            <figure><embed  className="w-full aspect-video ..." src="https://wakatime.com/share/@KevFlo/65ecabe6-3a7e-4222-8acc-d45c6fb59fcd.svg"></embed></figure>
          </ul>
        </div>
        <div className='h-24' >
                        <br/>
                        <br/>2491
                    </div>
    </div>
  );
};
export default Projects;