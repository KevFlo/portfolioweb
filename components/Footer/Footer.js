import React from "react";

function Footer() {
  return (
    <div className="relative h-32 w-screen flex flex-wrap ">
      <footer className="absolute inset-x-0 bottom-0 bg-[#141414] h-14 flex justify-center text-white">
        <div className="bg-[#141414] flex justify-center ">
          <p className="bg-[#141414] shadow-lg flex justify-center ">
            Copyright &copy; kevinflores.net 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;