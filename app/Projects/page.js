import React from "react";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
        <div className="px-4 bg-slate-900 ">
            <ul className="flex justify-around">
                <li><a href="https://github.com/KevFlo/P2PMessenger">P2P Chat App</a></li>
                <li>Kubernetes 6 pi cluster computer/server</li>
                <li><a href="https://tryhackme.com/p/Azath0th">TryHackMe</a></li>
                <li>Pen Testing Course</li>
                <li>This website, its about time i use my small corner of the internet.</li>
            </ul>
        </div>
        <div className="WakaDash">
          <ul className="wakalist">
            <figure><embed src="https://wakatime.com/share/@KevFlo/12fa125c-7727-4312-94c8-e1c3a40098c5.svg"></embed></figure>
            <figure><embed src="https://wakatime.com/share/@KevFlo/22527ea2-46e3-4be9-b135-503d6db55bd1.svg"></embed></figure>
            <figure><embed src="https://wakatime.com/share/@KevFlo/98089332-e4ba-493a-a6e8-57261541cb2c.svg"></embed></figure>
          </ul>
        </div>
    </div>
  );
};
export default Projects;